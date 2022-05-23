import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './views/team-list/team-list.component';
import { TeamPageComponent } from './views/team-page/team-page.component';

const routes: Routes = [
  {path: '', component: TeamListComponent},
  {path: 'team/:id', component: TeamPageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
