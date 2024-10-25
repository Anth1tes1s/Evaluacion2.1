import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciousuario',
  templateUrl: './iniciousuario.page.html',
  styleUrls: ['./iniciousuario.page.scss'],
})
export class IniciousuarioPage {

  constructor(private router: Router) { }

  registrarConductor() {
    this.router.navigate(['/registroconductor']);
  }

  solicitarViaje() {
    // Lógica para solicitar un viaje
    console.log('Viaje solicitado');
  }

  cancelarViaje() {
    // Lógica para cancelar un viaje
    console.log('Viaje cancelado');
  }
}
