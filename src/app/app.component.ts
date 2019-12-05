import { Component } from '@angular/core';
/* Importación de router */
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServicioWeb';
  /*Se crea una variable privada dentro del constructor llamada router del tipo ROUTER
  y se hace la importación de Router  */
  constructor(private router: Router) { }

  Listar() {
    /* "listar" es la palabra usada en el enrutamiento(app.routing.module) para reedirigir
    la funcionalidad cuando se use el boton listar (listar usuarios)" */
    this.router.navigate(["listar"]);
  }
  Nuevo() {
    /* "nuevo" es la palabra usada en el enrutamiento(app.routing.module) para reedirigir
   la funcionalidad cuando se use el boton Nuevo (Agregar nuevo usuario) " */
    this.router.navigate(["add"]);
  }
}
