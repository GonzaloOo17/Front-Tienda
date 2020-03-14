import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/index/index.component';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { RegisterComponent } from './modules/users/register/register.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'search/:keyword', component: SearchComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
