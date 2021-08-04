import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './_components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './_components/home/home.component';
import { RegisterComponent } from './_components/register/register.component';
import { MemberListComponent } from './_components/member-list/member-list.component';
import { MemberDetailComponent } from './_components/member-detail/member-detail.component';
import { ListsComponent } from './_components/lists/lists.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'members', component: MemberListComponent},
  {path: 'members/:id', component: MemberDetailComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
