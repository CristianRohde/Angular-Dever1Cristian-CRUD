import { Component } from '@angular/core';
import {Empleado} from './models/empleado'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: Empleado[]=[
    {id: 1, nome: "Cristian", nacionalidade:"Argentina"},
    {id: 2, nome: "Valeria", nacionalidade:"Argentina"},
    {id: 3, nome: "Arthur", nacionalidade:"Brasil"},
  ];

  selecionarEmpleado: Empleado = {id:0, nome: '', nacionalidade: ''};

  openForEdit(empleado: Empleado): void 
  {
    this.selecionarEmpleado = empleado;
  }

  addOrEdit(): void
  {
    if(this.selecionarEmpleado.id === 0) // INSERT
    {
      this.selecionarEmpleado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.selecionarEmpleado);
    }
    this.selecionarEmpleado = {id:0, nome: '', nacionalidade: ''};
  }

  delete(): void 
  {
    if(confirm('Tem certeza de que deseja excluí-lo?'))
    {
      this.empleadoArray = this.empleadoArray.filter(x => x != this.selecionarEmpleado);
      this.selecionarEmpleado = {id:0, nome: '', nacionalidade: ''};
    }
  }

}
