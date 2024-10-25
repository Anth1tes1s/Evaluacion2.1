import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registroconductor',
  templateUrl: './registroconductor.page.html',
  styleUrls: ['./registroconductor.page.scss'],
})
export class RegistroconductorPage {

  rut: string = '';
  matricula: string = '';
  tipoVehiculo: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  async registrarConductor() {
    // Validar que los campos no estén vacíos
    if (!this.rut || !this.matricula || !this.tipoVehiculo) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return; // Detener la ejecución si hay campos vacíos
    }

    // Aquí puedes agregar la lógica para guardar el conductor (ejemplo en un servicio)

    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Conductor registrado correctamente :D.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/inicioconductor']); // Redirigir al usuario a la página de inicio del conductor
        }
      }]
    });
    await alert.present();
  }
}
