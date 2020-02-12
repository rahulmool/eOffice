import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async sendtask() {
    const alert = await this.alertCtrl.create({
      header: 'Send Task?',
      message: 'Type in your new task to Send.',
      inputs: [{ name: 'editTask', placeholder: 'Task' },{name:'list',type:'date',min: '2017-03-01',
      max: '2018-01-12'  }],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {text: 'Send', handler: data => {}  }
      ]
    });
    await alert.present();
  }

}
