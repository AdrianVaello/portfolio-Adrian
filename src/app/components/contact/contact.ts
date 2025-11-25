import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Aquí puedes integrar con un servicio de email como Formspree, EmailJS, etc.
    alert('¡Mensaje enviado! (Implementa tu servicio de email)');
    this.formData = { name: '', email: '', message: '' };
  }
}
