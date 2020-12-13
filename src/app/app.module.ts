import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { GuitarrasComponent } from './guitarras/guitarras.component';
import { PianosComponent } from './pianos/pianos.component';
import { BajosComponent } from './bajos/bajos.component';
import { BateriasComponent } from './baterias/baterias.component';
import { PromoComponent } from './promo/promo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriasComponent,
    MarcasComponent,
    ContactanosComponent,
    GuitarrasComponent,
    PianosComponent,
    BajosComponent,
    BateriasComponent,
    PromoComponent,
    ClienteComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
