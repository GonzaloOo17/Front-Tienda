import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/index/index.component';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { TiendaComponent } from './modules/tiendas/tienda/tienda.component';
import { UserProfileComponent } from './modules/users/user-profile/user-profile.component';
import { TiendasCategoriaComponent } from './modules/tiendas/tiendas-categoria/tiendas-categoria.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'search/:keyword', component: SearchComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'tienda/:id', component: TiendaComponent},
  { path: 'usuario/:id', component: UserProfileComponent},
  { path: 'categoria/:id', component: TiendasCategoriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
