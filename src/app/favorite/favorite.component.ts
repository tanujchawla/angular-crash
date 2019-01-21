import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {

  @Input('is-fav') isFavorite: boolean;
  @Output('change') change = new EventEmitter<{[key: string]:boolean}>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      newValue: this.isFavorite
      });
  }

}
