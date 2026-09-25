import { Routes } from '@angular/router';
import { Member } from './member/member';
import { MemberForm } from './member-form/member-form';
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
];
