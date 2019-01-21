import { Component } from '@angular/core';

interface FavChangedEvent{
  newValue : boolean    
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title : 'Title',
    isFavorite : true
  }

  onFavoriteChange(eventArgs: FavChangedEvent) {
    console.log('Favorite changed : ' + eventArgs);
  }
}
