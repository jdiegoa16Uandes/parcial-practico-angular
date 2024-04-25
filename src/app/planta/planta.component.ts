import { Component, OnInit, numberAttribute } from '@angular/core';
import { PlantaService } from './planta.service';
import { Planta } from './planta';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  plantas: Array<Planta>=[];
  tiposDePlanta: { [tipo: string]: number } = {};

  constructor(private plantaService: PlantaService) { }

  getPlantas(){
    this.plantaService.getPlantas().subscribe(plantas => {
        this.plantas = plantas;
        this.contarTiposDePlanta();
    });
  }

  contarTiposDePlanta() {
    this.tiposDePlanta = {}; 
    this.plantas.forEach(planta => {
      if (this.tiposDePlanta[planta.tipo]) {
        this.tiposDePlanta[planta.tipo]++;
      } else {
        this.tiposDePlanta[planta.tipo] = 1;
      }
    });
  }

  ngOnInit() {
    this.getPlantas();
  }
  

}
