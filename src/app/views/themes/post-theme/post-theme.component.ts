import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/top/alert/alert.service';

@Component({
  selector: 'app-post-theme',
  templateUrl: './post-theme.component.html',
  styleUrls: ['./post-theme.component.scss'],
})
export class PostThemeComponent implements OnInit {
  constructor(private fb: FormBuilder, private alert: AlertService) {}

  postThemeForm = this.fb.group({
    name: ['', [Validators.minLength(2), Validators.required]],
    pictures: [[], [Validators.required, Validators.minLength(10)]],
    cardBack: [[], Validators.required],
  });

  buttonLabel: string = 'Valider';
  picturesLengthAlert: number = 0;
  displaySideMenu: boolean = false;

  pictureChangeHandler(): void {
    this.postThemeForm.valueChanges
      .pipe(
        filter((values) => {
          return values.pictures.length !== this.picturesLengthAlert;
        })
      )
      .subscribe(() => {
        this.picturesLengthAlert = this.postThemeForm.value.pictures.length;
        this.alert.message = `${this.postThemeForm.value.pictures.length} images sont disponibles dans en preview dans le menu`;
        this.alert.switchAlert();
      });
  }

  pictureDelete(pictureId: number, source: string): void {
    const result = [...this.postThemeForm.value[source]].filter(
      (pic, index) => {
        return index !== pictureId;
      }
    );
    this.postThemeForm.patchValue({ [source]: [...result] });
  }

  onSubmit(e: any): void {
    e.preventDefault();
    console.log(this.postThemeForm.value);
  }

  ngOnInit(): void {
    this.pictureChangeHandler();
  }
}