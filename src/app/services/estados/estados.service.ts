import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  // private API_SERVER = "http://localhost:8080/estados/"
  private API_SERVER = "http://demopersona.herokuapp.com/estados/"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPaises(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public getAllEstadosByPais(idPais): Observable<any>{
    return this.httpClient.get(this.API_SERVER + idPais);
  }
}
