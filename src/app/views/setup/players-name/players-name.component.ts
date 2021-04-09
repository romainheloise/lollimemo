import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { GameParametersService } from 'src/app/core/services/game-parameters.service';
import { FormValidation } from 'src/app/interface/interface';
import { SetupService } from '../setup-service/setup.service';

@Component({
  selector: 'app-players-name',
  templateUrl: './players-name.component.html',
  styleUrls: ['./players-name.component.scss'],
})
export class PlayersNameComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private gameParams: GameParametersService,
    private setupServ: SetupService
  ) {}

  maxNumberOfPlayer: number = 1;
  userForm = this.fb.group({
    aliases: this.fb.array([this.fb.control('')]),
  });
  formValidation: FormValidation[] = [
    {
      isMinlength: false,
      isSubmited: false,
    },
  ];
  validate$ = new BehaviorSubject(this.formValidation);

  ngOnInit(): void {
    this.maxNumberOfPlayer = this.gameParams.numberOfPlayer;
    this.setupServ.setIndexInChildren();
    this.setRegisteredPlayers();
    this.useEffectForValidation();
    this.validate$.next(this.formValidation);
    this.inputHandler();
  }

  useEffectForValidation(): void {
    this.validate$.subscribe({
      next: (resp) => {
        const allFormValid = this.formValidationVerification(resp);
        if (allFormValid) {
          this.setupServ.setDisableButtons([false, false]);
          this.setupServ.setDisableDots([false, false, false]);
        } else {
          this.setupServ.setDisableButtons([false, true]);
          this.setupServ.setDisableDots([false, false, true]);
        }
      },
    });
  }

  inputHandler() {
    this.userForm.valueChanges.subscribe({
      next: (resp) => {
        const { aliases } = resp;
        aliases.forEach((alias: string, index: number) => {
          this.formValidation[index].isMinlength = alias.length > 2 && true;
        });
        this.validate$.next(this.formValidation);
      },
    });
  }

  onSubmit(e: any): void {
    const options = e.submitter.value;
    if (options === 'Valider') this.sendUserName();
    if (options === 'Modifier') this.modifyUserName(e.submitter.id);
  }

  modifyUserName(userToModifyIndex: number) {
    this.gameParams.modifyUserName(
      userToModifyIndex,
      this.aliases.value[userToModifyIndex]
    );
    this.addPlayerInput();
  }

  sendUserName(): void {
    const lastWrittenName = this.aliases.value.length - 1;
    const dontOverrideArray =
      this.formValidation.length <= this.maxNumberOfPlayer;

    if (dontOverrideArray) {
      this.formValidation[lastWrittenName].isSubmited = true;
      this.gameParams.postPlayerName(this.aliases.value[lastWrittenName]);
    }
    this.addPlayerInput();
  }

  addPlayerInput(): void {
    const playersNameInputs = this.aliases.length;

    if (playersNameInputs < this.maxNumberOfPlayer) {
      this.formValidation.push({
        isMinlength: false,
        isSubmited: false,
      });
      this.aliases.push(this.fb.control(''));
    }
    this.validate$.next(this.formValidation);
  }

  setRegisteredPlayers(): void {
    if (this.gameParams.players.length > 0) {
      this.aliases.removeAt(0);
      this.formValidation = [];
      const players = this.gameParams.players;

      for (let index = 0; index < this.gameParams.numberOfPlayer; index++) {
        if (players[index]?.username) {
          this.aliases.push(this.fb.control(players[index].username));
          this.formValidation.push({ isSubmited: true, isMinlength: true });
        }
      }
    }
  }

  formValidationVerification(fromToVerify: FormValidation[]): boolean {
    let result = fromToVerify
      .map((input) => {
        return Object.values(input).filter((value) => value === false);
      })
      .reduce((acc, value) => acc.concat(value));
    return result.length === 0;
  }

  get aliases() {
    return this.userForm.get('aliases') as FormArray;
  }
}
