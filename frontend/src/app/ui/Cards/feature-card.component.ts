import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-700 p-8 rounded-lg transform hover:scale-105 transition-transform">
      <div class="w-16 h-16 bg-blue-500 rounded-lg mb-6 flex items-center justify-center">
        <i class="text-3xl" [class]="'icon-' + icon"></i>
      </div>
      <h3 class="text-xl font-semibold mb-4">{{title}}</h3>
      <p class="text-gray-300">{{description}}</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FeatureCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
} 