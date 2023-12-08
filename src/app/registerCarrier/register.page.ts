import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarrierModalComponent } from './carrier-modal/carrier-modal.component';

@Component({
  selector: 'register-page',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {

  constructor(
    public modalController: ModalController
  ) {}

  async cadastrarTransportadoraModal(){
    const modal = await this.modalController.create({
      component: CarrierModalComponent,
      cssClass: 'modal',
      mode:'ios'
    })
  }
}
