import { Component, OnInit, ViewChild } from '@angular/core';

import { FirebaseProdService } from '../../services/firebase-prod.service';
import { Person } from 'src/app/models/persona';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  persons = [];
  cantidad: number;
  persona = {} as Person;
  alert: boolean = false;


  

  constructor(public PersonService: FirebaseProdService) { }

  ngOnInit() {

    this.PersonService.getProducts().subscribe(person => {
      console.log(person);
      this.persons = person;
      this.cantidad = this.persons.length;

    });



    this.PersonService.getMessages().subscribe(message => {
      console.log(message);
    });
  }

  BorrarProducto(event, producto) {
    this.PersonService.deletePerson(producto);
  }

  Editar(person) {
    this.persona = Object.assign({}, person);
  }

  guardarCambios() {
    this.PersonService.updatePerson(this.persona);
    this.persona = {} as Person;

  }
}
