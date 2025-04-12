import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  template: `
    <button 
      [class]="'px-8 py-4 rounded-lg font-semibold transition-colors text-lg ' + 
               (variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-600')"
      [type]="type">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      transition: all 0.3s ease;
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
    }
  `]
})
export class PrimaryButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
} 