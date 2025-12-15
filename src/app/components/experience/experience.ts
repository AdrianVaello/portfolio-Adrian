import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}
@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      title: 'Técnico superior de investigación',
      company: 'Universitat de València | CECT',
      period: 'Septiembre 2024 - Enero 2026',
      description: 'Desarrollo de scripts para análisis de datos microbiológios y su uso en proyectos europeos como <a href="https://www.bioindustry4.eu/" target="_blank" rel="noopener">Bioindustry 4.0</a>, <a href="https://microbes4climate.eu/" target="_blank" rel="noopener">Microbes4Climate</a> o <a href="https://maldibank.eu/" target="_blank" rel="noopener">Maldibank</a>, participando también en estos en la creación de deliverables y administrando sus servidores y listas de correo y usuarios implementando mejoras y actualizando los sistemas.'
    },
    {
      title: 'Desarrollador frontend y arquitectura cloud para sistema de prácticas basado en IA',
      company: 'Universitat de València',
      period: 'Abril 2023 - Julio 2023',
      description: 'Diseño y desarrollo de interfaz web para el muestreo de los datos. Desarrollo de una API para la conexión de la web con el sistema de gestión de prácticas.'
    },
    {
      title: 'Recogida y análisis de de datos de un pulsioxímetro a través de una aplicación móvil',
      company: 'Universitat Politècnica de València',
      period: '2022',
      description: 'Desarrollo de la conexión y recepción de datos mediante bluetooth del pulsioxímetro de bajo coste a la aplicación móvil. Diseño interfaz para muestreo de datos. Cálculo de variables médicas y su exportación en formato Excel.'
    },
    {
      title: 'Aplicación web y de gestión para restaurante',
      company: '<a href="https://lamesedora.com/" target="_blank" rel="noopener">La Mesedora</a>',
      period: '2019-2023',
      description: 'Diseño de la base de datoscreando un panel de administración con conexión con el frontend y la base de datos actualizando la web a los requerimientos de la empresa.'
    }
  ];
}
