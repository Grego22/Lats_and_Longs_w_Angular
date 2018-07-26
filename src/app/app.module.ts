import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {AngularFireModule} from 'angularfire2'

// import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    SidebarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey:''}),
    AngularFireModule.initializeApp(environment.firebase, 'demo-app')
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
