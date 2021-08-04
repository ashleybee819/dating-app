import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { ListsComponent } from './_components/lists/lists.component';
import { MemberDetailComponent } from './_components/member-detail/member-detail.component';
import { MemberListComponent } from './_components/member-list/member-list.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members/:id', component: MemberDetailComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'lists', component: ListsComponent},
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }