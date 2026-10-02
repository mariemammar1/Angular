import { Routes } from '@angular/router';
import { Member } from './member/member';
import { MemberForm } from './member-form/member-form';
import { Dashboard } from './dashboard/dashboard';
import { Tools } from './tools/tools';
import { Articles } from './articles/articles';
import { Events } from './events/events';
//correspondance entre path et composant
export const routes: Routes = [
  {
    path: 'create',
    component: MemberForm,
  },
  {
    path: '',
    component: Member,
  },
  {
    path: 'edit/:id',
    //id contenu dynamique dans l'url
    component: MemberForm,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'tools',
    component: Tools,
  },
  {
    path: 'articles',
    component: Articles,
  },
  {
    path: 'events',
    component: Events,
  },
];
