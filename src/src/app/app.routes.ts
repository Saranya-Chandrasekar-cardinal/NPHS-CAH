import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: ':brand/home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'ordering',
    loadComponent: () => import('./components/ordering/ordering.component').then(m => m.OrderingComponent)
  },
  {
    path: 'patients',
    loadComponent: () => import('./components/patients/patients.component').then(m => m.PatientsComponent)
  },
  {
    path: 'other',
    loadComponent: () => import('./components/other/other.component').then(m => m.OtherComponent)
  },
  {
    path: 'wholesale-dashboard',
    loadComponent: () => import('./components/wholesale-dashboard/wholesale-dashboard.component').then(m => m.WholesaleDashboardComponent)
  }
];
