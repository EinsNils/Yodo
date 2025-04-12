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
      title: 'Aufgabenverwaltung',
      description: 'Erfasse und organisiere Aufgaben mit unserem intuitiven Drag-and-Drop-System.',
      icon: 'task'
    },
    {
      title: 'Teamzusammenarbeit',
      description: 'Arbeite nahtlos mit deinem Team zusammen und bleibe immer auf dem neuesten Stand.',
      icon: 'team'
    },
    {
      title: 'Kanban-Board',
      description: 'Visualisiere Workflows und optimiere die Produktivität mit anpassbaren Boards.',
      icon: 'kanban'
    },
    {
      title: 'Datensicherheit',
      description: 'Deine Daten sind sicher durch modernste Verschlüsselungstechnologien geschützt.',
      icon: 'security'
    }
  ];

  testimonials = [
    {
      quote: 'YODO hat unsere Teamproduktivität um 40% gesteigert. Die einfache Bedienung und die leistungsstarken Funktionen sind genau das, was wir gesucht haben.',
      name: 'Max Mustermann',
      role: 'Projektmanager',
      company: 'TechCorp GmbH'
    },
    {
      quote: 'Nach dem Wechsel zu YODO haben wir endlich Ordnung in unsere Projekte bekommen. Die intuitive Benutzeroberfläche macht die Einarbeitung für neue Teammitglieder zum Kinderspiel.',
      name: 'Julia Schmidt',
      role: 'Teamleiterin',
      company: 'Digital Solutions'
    },
    {
      quote: 'Die Automatisierungsfunktionen von YODO haben uns unzählige Stunden manueller Arbeit erspart. Ein absolutes Must-have für jedes professionelle Team!',
      name: 'Thomas Weber',
      role: 'CTO',
      company: 'Innovative Systems AG'
    }
  ];

  pricingPlans = [
    {
      name: 'Basic',
      price: 'Kostenlos',
      billingPeriod: 'für immer',
      description: 'Für Einzelpersonen und kleine Teams, die gerade erst anfangen.',
      features: [
        'Bis zu 5 Benutzer',
        'Unbegrenzte Aufgaben',
        'Basis Kanban-Board',
        'Einfache Berichterstellung'
      ],
      ctaText: 'Kostenlos starten',
      recommended: false
    },
    {
      name: 'Team',
      price: '€9,99',
      billingPeriod: 'pro User/Monat',
      description: 'Für professionelle Teams mit erweiterten Anforderungen.',
      features: [
        'Unbegrenzte Benutzer',
        'Erweiterte Analytik',
        'Automatisierung von Workflows',
        'Integrationen mit anderen Tools',
        '24/7 Premium Support'
      ],
      ctaText: 'Jetzt upgraden',
      recommended: true
    }
  ];

  faqItems = [
    {
      question: 'Was ist YODO und welche Funktionen bietet es?',
      answer: 'YODO ("You Only Do Once") ist ein Projektmanagementsystem, das darauf ausgelegt ist, Aufgaben beim ersten Mal richtig zu erledigen. Es bietet Funktionen wie Aufgabenverwaltung, Teamzusammenarbeit, Kanban-Boards und fortschrittliche Datensicherheit.',
      isOpen: true
    },
    {
      question: 'Für wen ist YODO geeignet?',
      answer: 'YODO ist ideal für Teams jeder Größe, von Freelancern über Startups bis hin zu großen Unternehmen. Es ist besonders nützlich für Teams, die ihre Produktivität steigern und Arbeitsabläufe optimieren möchten.',
      isOpen: false
    },
    {
      question: 'Kann YODO kostenlos genutzt werden?',
      answer: 'Ja, YODO bietet einen kostenlosen Basic-Plan für bis zu 5 Benutzer mit grundlegenden Funktionen. Für erweiterte Funktionen und unbegrenzte Benutzer empfehlen wir unseren Team-Plan.',
      isOpen: false
    },
    {
      question: 'Wie kann ich YODO installieren?',
      answer: 'YODO ist eine cloudbasierte Lösung und erfordert keine Installation. Einfach registrieren und sofort loslegen. Für größere Unternehmen bieten wir auch On-Premise-Lösungen an.',
      isOpen: false
    },
    {
      question: 'Welche Systeme unterstützt YODO?',
      answer: 'YODO ist plattformunabhängig und funktioniert auf allen gängigen Betriebssystemen (Windows, macOS, Linux) sowie auf mobilen Geräten (iOS, Android) über unsere responsive Web-App.',
      isOpen: false
    },
    {
      question: 'Benötige ich spezielle technische Kenntnisse?',
      answer: 'Nein, YODO wurde mit einem Fokus auf Benutzerfreundlichkeit entwickelt. Die intuitive Oberfläche ermöglicht es auch Anfängern, alle Funktionen ohne technisches Vorwissen zu nutzen.',
      isOpen: false
    },
    {
      question: 'Gibt es ein Dashboard für YODO?',
      answer: 'Ja, YODO bietet ein anpassbares Dashboard mit umfassenden Analysen, Projektübersichten, Teammitgliederstatus und wichtigen KPIs, um Ihre Projekte effizient zu verwalten.',
      isOpen: false
    }
  ];

  toggleFaqItem(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
} 