/*Importacion de modulos para crear un servicio*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //sirve para hacer peticiones ajax
import { Observable } from 'rxjs/Observable'; //libreria que ya incluye angular
import { Project } from '../models/project';
import { Global } from './global';

//Decorador
@Injectable()
export class ProjectService{
	public url: string; //aqui se guarda la url de la api que esta en el file global.ts

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}
	//Metodo de prueba
	testService(){
		return 'Probando el servicio de Angular';
	}

	//Metodo para guadar la informacion que se ingresa por la pagina web a la base de datos 

	saveProject(project: Project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'save-project', params, {headers: headers});
									//esta en las rutas el save-project
	}

	//Metodo para listar tosdos los proyectos en una sola pagina

	getProjects():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'projects', {headers: headers});

	}

	//Metodo para mostrar los proyectos en la pagina de detail
	getProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'project/'+id, {headers: headers});
	}

	//Metodo para borrar los proyectos usando el boton de delete en la pagina de detail
	deleteProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'project/'+id, {headers: headers});
	}

	//Metodo para editar los proyetos desde el boton de edit. 

	updateProject(project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'project/'+project._id, params, {headers: headers});

	}
}