import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../service/registro.service';
import {Registro} from '../model/registro';
import { element } from 'protractor';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  registroList : Registro[];

  constructor( public registroService : RegistroService) { }

  ngOnInit(): void {
    this.registroService.verRegistros()
    .snapshotChanges()
    .subscribe(items => {
      this.registroList = [];
      items.forEach(element =>{
        let x = JSON.parse(JSON.stringify(element.payload));
        x['$key'] = element.key;
        this.registroList.push(x as Registro)
      })
    })
  }

}
