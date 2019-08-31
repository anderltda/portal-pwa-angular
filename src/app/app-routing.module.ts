import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/userList/UserList.page';
import { UserPage } from './pages/user/User.page';
import { LoginPage } from './pages/login/Login.page';
import { AuthGuard } from './services/Auth.guard';
import { NotFoundPage } from './pages/not-found/NotFound.page';
import { AccountPage } from './pages/account/Account.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'account', component: AccountPage },
  { path: 'users', component: UserListPage, canActivate: [AuthGuard]},
  { path: 'user', component: UserPage, canActivate: [AuthGuard]},
  { path: 'user/:id', component: UserPage, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
