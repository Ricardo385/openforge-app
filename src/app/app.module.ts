import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// IMPORTING NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  SINGLE_USER_STATE_NAME,
  USER_STATE_NAME,
} from './tab1/store/user.selector';
import { singleUserReducer, userReducer } from './tab1/store/user.reducer';
import { UserEffects } from './tab1/store/user.effects';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(USER_STATE_NAME, userReducer),
    StoreModule.forFeature(SINGLE_USER_STATE_NAME, singleUserReducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule {}
