import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MarcasComponent } from './marcas/marcas.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { GuitarrasComponent } from './guitarras/guitarras.component';
import { PianosComponent } from './pianos/pianos.component';
import { BajosComponent } from './bajos/bajos.component';
import { BateriasComponent } from './baterias/baterias.component';
import { PromoComponent } from './promo/promo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',redirectTo:'Inicio',pathMatch:'full'},
  {path:'Inicio',component:InicioComponent},
  {path:'Categorias',component:CategoriasComponent},
  {path:'Marcas',component:MarcasComponent},
  {path:'Promociones',component:PromocionesComponent},
  {path:'Contactanos',component:ContactanosComponent},
  {path:'Guitarras',component:GuitarrasComponent},
  {path:'Pianos',component:PianosComponent},
  {path:'Bajos',component:BajosComponent},
  {path:'Baterias',component:BateriasComponent},
  {path:'Promo',component:PromoComponent},
  {path:'Cliente',component:ClienteComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
