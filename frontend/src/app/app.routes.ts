import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // Add more routes here as we develop other features
  {
    path: '**',
    redirectTo: ''
  }
];
