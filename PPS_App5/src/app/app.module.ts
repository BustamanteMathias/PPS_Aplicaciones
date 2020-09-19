import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

//SPLASH
import { SplashComponent } from "./componentes/splash/splash.component";

//FIREBASE
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUqQhgb1fu-ajSTQm4GqPtgnRqJljnTxg",
  authDomain: "appprueba-pps.firebaseapp.com",
  databaseURL: "https://appprueba-pps.firebaseio.com",
  projectId: "appprueba-pps",
  storageBucket: "appprueba-pps.appspot.com",
  messagingSenderId: "843208328067",
  appId: "1:843208328067:web:595860062dc356dc982cb6",
  measurementId: "G-RCE1GM1RS6",
};

@NgModule({
  declarations: [AppComponent, SplashComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
