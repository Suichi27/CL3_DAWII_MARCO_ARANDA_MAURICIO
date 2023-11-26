import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EpisodioListaComponent } from './dashboard/episodio/episodio-lista/episodio-lista.component';
import { NotasComponent } from './dashboard/notas/notas.component';
import { EstacionamientoComponent } from './dashboard/estacionamiento/estacionamiento.component';
import { MaterialModule } from './angular-material/material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    EpisodioListaComponent,
    NotasComponent,
    EstacionamientoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'dashboard',component:DashboardComponent,
      children:[
        {path:'episodios',component:EpisodioListaComponent},
        {path:'notas',component:NotasComponent},
        {path:'estacionamiento',component:EstacionamientoComponent}
      ]
    },
      {path:'', redirectTo: 'dashboard',pathMatch:'full'},
      {path:'**',component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
