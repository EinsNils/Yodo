import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../ui/Buttons/primary-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <header class="container mx-auto px-4 py-20">
      <div class="text-center max-w-4xl mx-auto">
        <div class="mb-8">
          <i class="text-4xl icon-logo"></i>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          YODO
          <span class="text-blue-400 block text-xl md:text-2xl mt-4">
            You Only Do Once
          </span>
        </h1>
        <p class="text-xl text-gray-300 mb-12">
          Das fortschrittlichste und benutzerfreundlichste Projektmanagementsystem.
          Erledige Dinge gleich beim ersten Mal richtig.
        </p>
        <div class="flex gap-4 justify-center">
          <app-primary-button variant="primary">
            Jetzt starten
          </app-primary-button>
          <app-primary-button variant="secondary">
            Mehr erfahren
          </app-primary-button>
        </div>
      </div>
    </header>
  `
})
export class HeroSectionComponent {} 