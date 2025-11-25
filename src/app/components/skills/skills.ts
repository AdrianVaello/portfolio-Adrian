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
      skills: ['Angular 19', 'TypeScript', 'RxJS', 'Tailwind CSS', 'SCSS', 'HTML5', 'Responsive Design', 'Angular Material']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Prisma']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'Jest', 'CI/CD', 'GitHub Actions', 'Vercel', 'Firebase', 'VS Code']
    },
    {
      category: 'Soft Skills',
      skills: ['Trabajo en equipo', 'Resolución de problemas', 'Comunicación efectiva', 'Metodologías ágiles', 'Liderazgo']
    }
  ];
}
