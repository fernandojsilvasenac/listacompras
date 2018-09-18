import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule }  from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastProvider } from '../providers/toast/toast';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { ListasProvider } from '../providers/listas/listas';
import { ProdutosProvider } from '../providers/produtos/produtos';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC1sXtZToa-ERa7UaY3dN9-rI6UsZGFrxk",
      authDomain: "senaccampinas-app-compartilhar.firebaseapp.com",
      databaseURL: "https://senaccampinas-app-compartilhar.firebaseio.com",
      projectId: "senaccampinas-app-compartilhar",
      storageBucket: "senaccampinas-app-compartilhar.appspot.com",
      messagingSenderId: "284178549329"
      }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastProvider,
    CategoriasProvider,
    ListasProvider,
    ProdutosProvider
  ]
})
export class AppModule {}

