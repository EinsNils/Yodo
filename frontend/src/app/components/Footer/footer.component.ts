import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 class="font-bold mb-4">YODO</h4>
            <p class="text-gray-400">You Only Do Once - Erledige Dinge gleich beim ersten Mal richtig.</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Produkt</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">Funktionen</a></li>
              <li><a href="#" class="hover:text-white">Preise</a></li>
              <li><a href="#" class="hover:text-white">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Rechtliches</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">Datenschutz</a></li>
              <li><a href="#" class="hover:text-white">AGB</a></li>
              <li><a href="#" class="hover:text-white">Impressum</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Support</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">Hilfe</a></li>
              <li><a href="#" class="hover:text-white">Kontakt</a></li>
              <li><a href="#" class="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 YODO. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {} 