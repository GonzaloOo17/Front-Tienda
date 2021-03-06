import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { IndexComponent } from './modules/index/index.component';
import { TiendasComponent } from './modules/tiendas/tiendas.component';
import { ListTiendasComponent } from './modules/tiendas/list-tiendas/list-tiendas.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAnunciosComponent } from './modules/anuncios/list-anuncios/list-anuncios.component';
import { CustomModalComponent } from './modals/custom-modal/custom-modal.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './modules/search/search.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { RouterModule } from '@angular/router';
import { TiendaComponent } from './modules/tiendas/tienda/tienda.component';
import { UserProfileComponent } from './modules/users/user-profile/user-profile.component';
import { TiendasCategoriaComponent } from './modules/tiendas/tiendas-categoria/tiendas-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    TiendasComponent,
    ListTiendasComponent,
    ListAnunciosComponent,
    CustomModalComponent,
    SearchComponent,
    RegisterComponent,
    TiendaComponent,
    UserProfileComponent,
    TiendasCategoriaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
