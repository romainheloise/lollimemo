import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game-services/game.service';
import { ModalService } from '../../../shared/widget/reg-pop/modal.service';
import { GameParametersService } from 'src/app/core/services/game-parameters.service';
import { Player } from 'src/app/interface/interface';
import { Router } from '@angular/router';
import { TimerService } from 'src/app/shared/widget/timer/timer.service';
import { popAnim } from 'src/app/animations/animations';

@Component({
  selector: 'win-box',
  templateUrl: './win-box.component.html',
  styleUrls: ['./win-box.component.scss'],
  animations : [popAnim]
})
export class WinBoxComponent implements OnInit {
  constructor(
    public game: GameService,
    private modalSrv: ModalService,
    private gameParams: GameParametersService,
    private router: Router,
    public timer : TimerService
  ) {}
  @Output() restartChange = new EventEmitter();
  multi: boolean = false;
  winner?: Player;

  ngOnInit(): void {
    this.multi = this.gameParams.players.length > 1;
    this.setWinner();
  }

  restart(): void {
    this.modalSrv.switchModal();
    this.restartChange.emit();
  }

  restartAndChangeParams() {
    this.modalSrv.switchModal();
    setTimeout(() => {
      this.gameParams.resetScore()
      this.router.navigate(['/setup']);
    });
  }

  setWinner() {
    const winner = this.gameParams.players.reduce((max: any, val: any) => {
      return max.totalPoints > val.totalPoints ? max : val;
    });
    this.winner = winner;
  }

  
}
