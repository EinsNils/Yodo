import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../ui/Buttons/primary-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <header class="container mx-auto px-4 py-8">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-5">
          YODO
          <span class="text-blue-400 block text-lg md:text-xl mt-3">
            You Only Do Once
          </span>
        </h1>
        <p class="text-lg text-gray-300 mb-10">
          Das fortschrittlichste und benutzerfreundlichste Projektmanagementsystem.
          Erledige Dinge gleich beim ersten Mal richtig.
        </p>
        <div class="flex gap-4 justify-center">
          <app-primary-button variant="primary" class="text-sm px-5 py-2.5">
            Jetzt starten
          </app-primary-button>
          <app-primary-button variant="secondary" class="text-sm px-5 py-2.5">
            Mehr erfahren
          </app-primary-button>
        </div>
      </div>
    </header>
  `
})
export class HeroSectionComponent {}
