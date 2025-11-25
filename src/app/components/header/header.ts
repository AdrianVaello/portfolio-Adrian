import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navItems = [
    { id: 'hero', label: 'Inicio', color: 'green' },
    { id: 'experience', label: 'Experiencia', color:'green' },
    { id: 'projects', label: 'Proyectos', color:'purple' },
    { id: 'skills', label: 'Habilidades', color:'red' },
    { id: 'contact', label: 'Contacto', color:'blue' },
  ];
}
