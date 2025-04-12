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
      [disabled]="disabled || isLoading"
      [style.width]="fullWidth ? '100%' : 'auto'">
      <ng-container *ngIf="isLoading; else content">
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
      </ng-container>
      <ng-template #content>
        <ng-content></ng-content>
      </ng-template>
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

    .animate-spin {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `]
})
export class PrimaryButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'white' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() fullWidth: boolean = false;

  get buttonClasses(): string {
    return this.variant;
  }
} 