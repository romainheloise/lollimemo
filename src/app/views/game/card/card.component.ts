import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Picture } from 'src/app/interface/interface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() card?: Picture;
  @Output() displayCard = new EventEmitter<{}>();
  backroungImg: {} = {};
  rotation: {} = {};

  ngOnInit(): void {
    if (this.card) {
      this.backroungImg = {
        'background-image': `url(${this.card.download_url})`,
      };
    }
  }

  onClick(): void {
    if (this.card)
      this.displayCard.emit({ unique: this.card.uniqueId, id: this.card.id });
  }
}
