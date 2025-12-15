import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
 skillGroups: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: ['Angular 19', 'TypeScript', 'RxJS', 'Tailwind CSS', 'SCSS', 'HTML5', 'Responsive Design', 'Angular Material', 'JavaScript']
    },
    {
      category: 'Backend',
      skills: ['PHP', 'Spring Boot', 'Flask', 'MySQL', 'PhpMyadmin', 'Python']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Scrum', 'CI/CD', 'Vercel', 'VS Code']
    },
    {
      category: 'Soft Skills',
      skills: ['Trabajo en equipo', 'Resolución de problemas', 'Comunicación efectiva', 'Metodologías ágiles', 'Liderazgo']
    }
  ];
}
