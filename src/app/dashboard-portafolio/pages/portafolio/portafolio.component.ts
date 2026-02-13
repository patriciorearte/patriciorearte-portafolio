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
      subtitulo: 'React - Curso CoderHouse',
      imagen: 'assets/imagenes/Conversor.PNG',
      fecha: 'DICIEMBRE 2025',
      descripcion: `Aplicación desarrollada en React para la conversión de divisas.
                Permite consultar cotizaciones y realizar conversiones dinámicas entre monedas.
                Consumo de API Json-Server desplegada en Render.
                <br>
                Deploy realizado en Netlify.`,
      linkWeb: 'https://warm-pastelito-6e7a1a.netlify.app/',
      linkGithub: 'https://github.com/patriciorearte/Conversion-divisas',
      disabled: false,
      imagenCard:'react-image'
    },  
    {
      titulo: 'Aplicación de Gestión de Tareas',
      subtitulo: 'React + Node.js + Express + MariaDB + JWT',
      imagen: 'assets/imagenes/calculadora-evelina.png',
      fecha: '2025',
      descripcion: 'Aplicación full stack para gestión de tareas con autenticación JWT, CRUD completo y base de datos MariaDB. Frontend desarrollado en React con Vite y backend en Node.js. Proyecto enfocado en arquitectura cliente-servidor y manejo de estado.',
      linkWeb: 'https://tareaspatricio.netlify.app/',
      linkGithub: 'https://github.com/patriciorearte/Proyecto_Tareas',
      disabled: false,
      imagenCard:'react-image'
    }
  ];


  abrirLink(url: string): void {
    window.open(url, '_blank');
  }

}
