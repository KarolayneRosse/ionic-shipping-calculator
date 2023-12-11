import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carrier-modal',
  templateUrl: './carrier-modal.component.html',
  styleUrls: ['./carrier-modal.component.scss'],
})
export class CarrierModalComponent  implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss()
  }

}
