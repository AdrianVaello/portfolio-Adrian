import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Experience,
    Projects,
    Skills,
    Contact
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-contact />
    </main>
  `,
  styles: []
})
export class App {
  protected readonly title = signal('portfolio-Adrian');
}
