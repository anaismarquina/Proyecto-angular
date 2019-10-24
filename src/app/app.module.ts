import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importar los modulos de http y los formularios/ los usaremos siempre. 
import { HttpClientModule } from '@angular/common/http'; //para poder hacer las peticiones ajax usando el HttpClien que esta en Project.service
import { FormsModule } from '@angular/forms' // parra usar en twowaydatabinding y los formularios
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    routing,//se carga aqui porque es un modulo. 
    HttpClientModule,
    FormsModule

  ],
  providers: [
    appRoutingProviders//se carga aqui porque es un servicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
