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
      title: 'E-Commerce Platform',
      tech: 'Angular 19 • Node.js • MongoDB',
      description: 'Plataforma de comercio electrónico completa con panel de administración, gestión de inventario y pasarela de pagos.',
      link: 'https://github.com/tuusuario/proyecto1'
    },
    {
      title: 'Dashboard Analytics',
      tech: 'Angular • TypeScript • Chart.js',
      description: 'Sistema de visualización de datos en tiempo real con gráficos interactivos y exportación de reportes.',
      link: 'https://github.com/tuusuario/proyecto2'
    },
    {
      title: 'Task Manager App',
      tech: 'Angular • Firebase • RxJS',
      description: 'Aplicación de gestión de tareas con sincronización en la nube, notificaciones push y colaboración en tiempo real.',
      link: 'https://github.com/tuusuario/proyecto3'
    },
    {
      title: 'Portfolio Generator',
      tech: 'Angular • Tailwind CSS',
      description: 'Generador de portfolios personalizables con múltiples temas y exportación a PDF.',
    },
    {
      title: 'Weather App',
      tech: 'Angular • OpenWeather API',
      description: 'Aplicación del clima con pronóstico extendido, mapas interactivos y alertas meteorológicas.',
    },
    {
      title: 'Chat Application',
      tech: 'Angular • Socket.io • Express',
      description: 'Aplicación de chat en tiempo real con salas privadas, compartir archivos y videollamadas.',
    }
  ];
}
