import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="buttonClasses"
      [type]="type"
      [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      padding: 0.75rem 1.5rem;
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 0.95rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      border: none;
      outline: none;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }
    
    button:active {
      transform: translateY(0);
    }
    
    .primary {
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      color: white;
    }
    
    .primary:hover {
      background: linear-gradient(135deg, #4338ca, #4f46e5);
    }
    
    .secondary {
      background: rgba(55, 65, 81, 0.9);
      color: white;
      border: 1px solid rgba(99, 102, 241, 0.5);
    }
    
    .secondary:hover {
      background: rgba(55, 65, 81, 1);
      border-color: rgba(99, 102, 241, 0.8);
    }

    .white {
      background: white;
      color: #4f46e5;
    }

    .white:hover {
      background: #f9fafb;
    }
    
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  `]
})
export class PrimaryButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'white' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;

  get buttonClasses(): string {
    return this.variant;
  }
} 