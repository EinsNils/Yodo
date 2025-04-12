import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="feature-card h-full">
      <div class="icon-container">
        <i [class]="getIconClass()"></i>
      </div>
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-description">{{ description }}</p>
    </div>
  `,
  styles: [`
    .feature-card {
      background-color: rgba(55, 65, 81, 0.7);
      border: 1px solid rgba(75, 85, 99, 0.5);
      border-radius: 12px;
      padding: 2rem 1.5rem;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      backdrop-filter: blur(4px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
      border-color: rgba(99, 102, 241, 0.5);
    }
    
    .icon-container {
      background: linear-gradient(135deg, #4f46e5, #818cf8);
      color: white;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);
    }
    
    .feature-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: white;
    }
    
    .feature-description {
      color: #d1d5db;
      line-height: 1.5;
      font-size: 0.95rem;
    }
  `]
})
export class FeatureCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';

  getIconClass(): string {
    // Map von icon string zu FontAwesome-Klassen
    const iconMap: { [key: string]: string } = {
      'task': 'fa-solid fa-check-double',
      'tasks': 'fa-solid fa-tasks',
      'team': 'fa-solid fa-users',
      'users': 'fa-solid fa-user-group',
      'kanban': 'fa-solid fa-columns',
      'columns': 'fa-solid fa-table-columns',
      'security': 'fa-solid fa-shield-halved',
      'shield-alt': 'fa-solid fa-shield-halved',
      'analytics': 'fa-solid fa-chart-line',
      'setup': 'fa-solid fa-bolt',
      'bolt': 'fa-solid fa-bolt',
      'cloud': 'fa-solid fa-cloud',
      'calendar': 'fa-solid fa-calendar',
      'chat': 'fa-solid fa-comments'
    };

    return iconMap[this.icon] || 'fa-solid fa-star';
  }
} 