import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  taskList=[];
  taskName: string ="";
  constructor(public alertCtrl: AlertController) { 
    this.taskList.push("rahul");
  }
  async updateTask(index) {
    const alert = await this.alertCtrl.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: data => {
        }
      }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
