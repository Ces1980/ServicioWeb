/*El servicio se encargara de hacer la conexión al proyecto backend*/
/*El HttpClientin ofrece una API HTTP cliente simplificada para aplicaciones angular 
que se basa en la interfaz expuesta por los navegadores. Los beneficios adicionales 
de incluyen características de capacidad de prueba, solicitud de tipo 
y objetos de respuesta, intercepción de solicitud y respuesta, 
apis y manejo simplificado de errores. */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* Importando el modelo de la clase persona */
import { Persona } from '../Modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  /*URL de donde vamos enlazar el backend */
  Url = 'http://localhost:8080/ServicioWeb/personas';

  /*Métodos que se estaran utilizando para traer los datos*/
  getPersonas() {
    /* Declarar variable persona de tipo array para ontener todos los datos
    de la url previamente declarada: Url = 'http://localhost:8080/ServicioWeb/personas';
    que hace referencia al proyecto backend*/

    return this.http.get<Persona[]>(this.Url);
  }
}
