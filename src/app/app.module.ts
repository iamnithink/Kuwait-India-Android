import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatStepperModule,
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
} from "@angular/material";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { IonicStorageModule } from "@ionic/storage";
import { SharedModule } from "./components/shared/shared.module";
import { httpInterceptorProviders } from "./api/http-interceptors";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { LaunchNavigator } from "@ionic-native/launch-navigator/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { Push } from "@ionic-native/push/ngx";
import { Network } from "@ionic-native/network/ngx";
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
// import { MediaCapture } from '@ionic-native/media-capture/ngx';
// import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    SharedModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    LaunchNavigator,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptorProviders,
    Push,
    Network,
    File,
    Camera,
    // MediaCapture,
    // StreamingMedia
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
