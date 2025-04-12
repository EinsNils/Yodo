import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/Header/hero-section.component';
import { FooterComponent } from '../../components/Footer/footer.component';
import { FeatureCardComponent } from '../../ui/Cards/feature-card.component';
import { PrimaryButtonComponent } from '../../ui/Buttons/primary-button.component';
import { NavbarComponent } from '../../components/Navigation/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FooterComponent,
    FeatureCardComponent,
    PrimaryButtonComponent,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Home page features
  features = [
    {
      title: 'Intelligentes Aufgabenmanagement',
      description: 'Intelligente Aufgabenorganisation, die dir hilft, dich auf das Wesentliche zu konzentrieren',
      icon: 'task'
    },
    {
      title: 'Einmalige Einrichtung',
      description: 'Richte deine Projekte einmal ein und lass YODO den Rest erledigen',
      icon: 'setup'
    },
    {
      title: 'Erweiterte Analysen',
      description: 'Erhalte Einblicke in deine Produktivität und den Projektfortschritt',
      icon: 'analytics'
    },
    {
      title: 'Sicher & Zuverlässig',
      description: 'Unternehmenssicherheit mit JWT-Authentifizierung',
      icon: 'security'
    }
  ];

  testimonials = [
    {
      name: 'Sarah M.',
      role: 'Projektmanagerin',
      company: 'Design Studio',
      text: 'YODO hat unsere Projektverwaltung revolutioniert. Die Philosophie der einmaligen Einrichtung funktioniert wirklich!'
    },
    {
      name: 'Thomas K.',
      role: 'Entwicklungsleiter',
      company: 'Tech Solutions',
      text: 'Endlich ein Projektmanagement-Tool, das tatsächlich Zeit spart, statt mehr Arbeit zu verursachen.'
    },
    {
      name: 'Lisa B.',
      role: 'Startup-Gründerin',
      company: 'Innovation Labs',
      text: 'Die perfekte Balance aus Einfachheit und Leistung. YODO hilft uns, uns auf die Umsetzung zu konzentrieren.'
    }
  ];

  pricingPlans = [
    {
      name: 'Kostenlos',
      price: '0€',
      period: 'Für immer',
      features: [
        'Bis zu 5 Teammitglieder',
        '1 Projekt-Arbeitsbereich',
        'Grundlegendes Aufgabenmanagement',
        'Community-Support'
      ],
      cta: 'Jetzt starten',
      recommended: false
    },
    {
      name: 'Pro',
      price: '9,99€',
      period: 'pro Monat',
      features: [
        'Bis zu 15 Teammitglieder',
        'Unbegrenzte Arbeitsbereiche',
        'Erweiterte Analysen',
        'Prioritäts-Support',
        'Eigene Vorlagen',
        'API-Zugriff'
      ],
      cta: 'Auf Pro upgraden',
      recommended: true
    }
  ];
} 