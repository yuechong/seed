import { Routes } from '@angular/router';

import { LoginComponent } from '@app/views/login';
import { ForgetComponent } from '@app/views/forget';
import { RegisterComponent } from '@app/views/register';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forget',
    component: ForgetComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    loadChildren: '@router/path/home.module#HomeModule',
    data: { title: '首页' }
  }
];
export { routes };
