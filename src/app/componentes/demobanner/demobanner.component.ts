import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/servicios/tarea.service';

@Component({
  selector: 'app-demobanner',
  templateUrl: './demobanner.component.html',
  styleUrls: ['./demobanner.component.css']
})
export class DemobannerComponent implements OnInit {

  lista:any=[];
  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.listarTareas()
  }

  listarTareas()
  {
    this.tareaService.getDatos().subscribe(
      res =>{this.lista = res},
      err =>{console.log(err)}
    );
  }

}
