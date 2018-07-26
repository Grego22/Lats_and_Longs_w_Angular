import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(db:AngularFireStore){
    
  }
  title = 'app';
}
