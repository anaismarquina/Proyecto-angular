import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes 
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

//Definir las rutas

const appRoutes: Routes = [
	{path: '', component: AboutComponent},
	{path: 'about-me', component: AboutComponent},
	{path: 'projects', component: ProjectsComponent},
	{path: 'create-projects', component: CreateComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'detail/:id', component: DetailComponent},
	{path: 'edit/:id', component: EditComponent},
	{path: '**', component: ErrorComponent}

];

//Exportar la configuracion de las rutas Error: Uncaught (in promise): [object String]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);