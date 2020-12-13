import { Injectable } from '@angular/core';
import {Registro} from '../model/registro';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  registrList:AngularFireList<any>;

  constructor(public firebase:AngularFireDatabase) { }

  verRegistros(){
    return this.registrList = this.firebase.list('clientes');
  }
}
