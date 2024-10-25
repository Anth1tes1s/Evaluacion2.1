import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicioconductor',
  templateUrl: './inicioconductor.page.html',
  styleUrls: ['./inicioconductor.page.scss'],
})
export class InicioconductorPage {
  viajesDisponibles = [
    { destino: 'Aeropuerto', cliente: 'Juan Pérez', hora: '14:30' },
    { destino: 'Centro Comercial', cliente: 'María López', hora: '15:00' },
    { destino: 'Hospital', cliente: 'Pedro González', hora: '15:30' }
  ];

  constructor(private alertController: AlertController) {}

  async seleccionarViaje(viaje: any) {
    const alert = await this.alertController.create({
      header: 'Viaje Seleccionado',
      message: `Has seleccionado el viaje a ${viaje.destino} con el cliente ${viaje.cliente}.`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
