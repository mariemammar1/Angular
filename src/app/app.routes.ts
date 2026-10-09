import { Routes } from '@angular/router';
import { Member } from './member/member';
import { MemberForm } from './member-form/member-form';
import { Dashboard } from './dashboard/dashboard';
import { Tools } from './tools/tools';
import { Articles } from './articles/articles';
import { Events } from './events/events';
import { Login } from './login/login';
import { authGuard } from './auth.guard';

// correspondance entre path et composant
export const routes: Routes = [
  {
    path: 'create',
    component: MemberForm,
    canActivate: [authGuard],
  },
  {
    path: 'member',
    component: Member,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    pathMatch: 'full',
    // Redirection par défaut vers la page des membres
    redirectTo: 'member',
  },
  {
    path: 'edit/:id',
    // id contenu dynamique dans l'url
    component: MemberForm,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
  {
    path: 'tools',
    component: Tools,
    canActivate: [authGuard],
  },
  {
    path: 'articles',
    component: Articles,
    canActivate: [authGuard],
  },
  {
    path: 'events',
    component: Events,
    canActivate: [authGuard],
  },
];
