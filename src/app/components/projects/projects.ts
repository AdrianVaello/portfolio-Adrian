import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  tech: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Recogida y análisis de de datos de un pulsioxímetro a través de una aplicación móvil',
      tech: 'Java • Java Android • CSV',
      description: 'Aplicación móviles para la recogida de datos a través de un pulsioxímetro de bajo coste para el muestreo de datos y su posterior análisis.',
      link: 'https://github.com/AdrianVaello/TFG-Oximetro'
    },
    {
      title: 'ValenBisi',
      tech: 'React Native • TypeScript • API ',
      description: 'Aplicación móvil para consultar en tiempo real la disponibilidad de bicicletas y estaciones del sistema de alquiler público de bicicletas de Valencia usando la API oficial de Valenbisi.',
      link: 'https://github.com/AdrianVaello/ValenBisi'
    },
    {
      title: 'Aplicación web para asignación de profesores',
      tech: 'Angular • Typescript • Python Flask • CSV',
      description: 'Aplicación web para la asignación de profesores de prácticas a plazas libres.',
      link: 'https://github.com/AdrianVaello/TFM-Asignacion-Profesores'
    },
    {
      title: 'Portfolio CV personal ',
      tech: 'Angular 21 • Tailwind CSS',
      description: 'Portafolio personal para mostrar proyectos y experiencia profesional.',
      link: 'https://adrianvaello.com/'
    },
    {
      title: 'Repositorio de partituras de música',
      tech: 'Próximamente',
      description: 'Próximamente...',
    }
  ];
}
