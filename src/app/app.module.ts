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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    TiendasComponent,
    ListTiendasComponent,
    ListAnunciosComponent,
    CustomModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
