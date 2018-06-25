import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';

@Injectable()
export class PushNotificationProvider {

  constructor(private oneSignal: OneSignal,
    public platform: Platform) {
    console.log('Hello PushNotificationProvider Provider');
  }

  init_notifications() {

    if (this.platform.is("cordova")) {

      this.oneSignal.startInit('60fc8a86-87e1-42d5-81b8-ea084f8d2850', '281169860713');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();

    }else{
      console.log("One signal no funciona en el navegador");
    }

  }

}
