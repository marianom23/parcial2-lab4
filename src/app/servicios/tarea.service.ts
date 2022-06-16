import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {


  constructor(private http: HttpClient) { }

  getDatos():Observable<any>
  {
    return this.http.get('http://168.194.207.98:8081/api_banner/get_banners.php');
  }

  getDatosId(Id: string):Observable<any>
  {
    return this.http.get('http://168.194.207.98:8081/api_banner/get_banner.php?id='+Id);
  }
  
  postDatos(tarea: Tarea):Observable<any>
  {
    return this.http.post('http://168.194.207.98:8081/api_banner/post_banner.php', tarea);
  }

  updateDatos(tarea: Tarea):Observable<any>
  {
    return this.http.put('http://168.194.207.98:8081/api_banner/put_banner.php',tarea);
  }

  deleteDatos(Id: string):Observable<any>
  {
    return this.http.delete('http://168.194.207.98:8081/api_banner/delete_banner.php?id='+Id);
  }

}


export interface Tarea{
  Id: number;
  urlImageBanner: string;
  textCaption: string;
  descripcionImagen: string;
  ordenSlider: number;
}
