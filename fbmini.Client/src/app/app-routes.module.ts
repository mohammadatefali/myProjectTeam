import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ProfileComponent } from '../components/profile/profile.component';
import {
  AuthGuard,
  NoAuthGuard,
  UserPreviewGuard,
} from '../components/auth/AuthGuard';
import { TestComponent } from '../components/test/test.component';
import { notFoundComponent } from '../components/not-found/not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { owner: true },
  },
  {
    path: 'user/:username',
    component: ProfileComponent,
    canActivate: [UserPreviewGuard],
    data: { owner: false },
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'test',
    component: TestComponent,
  },
  { path: '**', component: notFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
