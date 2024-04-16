import { Injectable } from '@angular/core';


import{ HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "Tarea/";

  constructor(private http:HttpClient) { }

  getList():Observable<Tarea[]>{
    return this.http.get<Tarea[]>(`${this.apiUrl}Lista`);
  }

  add(request:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>(`${this.apiUrl}Agregar`,request);
  }
  delete(idTarea:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}Eliminar/${idTarea}`);
  }

}

