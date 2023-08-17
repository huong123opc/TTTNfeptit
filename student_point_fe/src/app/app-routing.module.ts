import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './components/calender/calender.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GradeInSemesterComponent } from './components/grade-in-semester/grade-in-semester.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SemesterComponent } from './components/semester/semester.component';
import { TuitionComponent } from './components/tuition/tuition.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'grade-semester/:id', component: GradeInSemesterComponent, canActivate: [AuthGuard] },
  { path: 'semester', component: SemesterComponent, canActivate: [AuthGuard] },
  { path: 'tuition', component: TuitionComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalenderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }