import { Component } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'component',
  templateUrl: 'component.html',
  styleUrls: ['./component.css'],
})
export class Component {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Maliek News',
      subHeader: 'Subscribe Blogs',
      cssClass: 'global.css',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }
}
