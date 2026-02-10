import { Component } from '@angular/core';
import { Proyecto } from './models/proyecto';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  proyectos: Proyecto[] = [
    {
      titulo: 'Convertidor de divisas',
      subtitulo: 'Angular v.16 - Curso CoderHouse',
      imagen: 'assets/imagenes/homeCursoAngular.png',
      fecha: 'NOVIEMBRE 2023',
      descripcion: `Api Json-Server publicado en render: 
                    <a href="https://api-json-server-fq9l.onrender.com/" target="_blank">link_api</a>
                    <br>
                    Usuario de prueba: email:eve@gmail.com contraseña: 1234
                    <br>
                    Implementación hosting gratuito Netlify`,
      linkWeb: 'https://proyecto-curso-angular-coderhouse.netlify.app',
      linkGithub: 'https://github.com/evelinanunez/1PFNunez',
      disabled: false,
      imagenCard:'angular-image'
    },  
    {
      titulo: 'Calculadora',
      subtitulo: 'Hecha con Javascript vainilla - css puro',
      imagen: 'assets/imagenes/calculadora-evelina.png',
      fecha: 'FEBRERO 2024',
      descripcion: 'Se aplica conocimientos basicos de Javascript. Implementación hosting gratuito Netlify',
      linkWeb: 'https://calculadora-evelina.netlify.app',
      linkGithub: 'https://github.com/evelinanunez/calculadora-evelina/tree/master',
      disabled: false,
      imagenCard:'javascript-image'
    }
  ];


  abrirLink(url: string): void {
    window.open(url, '_blank');
  }

}
