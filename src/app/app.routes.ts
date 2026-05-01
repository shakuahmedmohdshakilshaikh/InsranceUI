import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { MainLayout } from './components/layout/main-layout/main-layout';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { Policies } from './components/pages/policies/policies';
import { Premiums } from './components/pages/premiums/premiums';
import { Payments } from './components/pages/payments/payments';

export const routes: Routes = [

  { path: 'login', component: Login }, // ✅ enable this

  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'policies', component: Policies },
      { path: 'premium', component: Premiums },
      { path: 'payment', component: Payments }
    ]
  },

  { path: '**', redirectTo: 'dashboard' }

];