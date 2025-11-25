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
      title: 'Senior Angular Developer',
      company: 'Tech Company',
      period: '2022 - Presente',
      description: 'Desarrollo de aplicaciones empresariales con Angular 19, implementación de arquitecturas escalables y mentoría a desarrolladores junior.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Creación de MVPs y productos digitales desde cero utilizando Angular, Node.js y bases de datos SQL/NoSQL.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Desarrollo de sitios web responsivos y aplicaciones SPA con Angular. Implementación de buenas prácticas y optimización de rendimiento.'
    }
  ];
}
