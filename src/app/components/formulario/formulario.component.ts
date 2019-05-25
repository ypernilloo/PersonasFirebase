import { Component, OnInit } from '@angular/core';
import { FirebaseProdService } from 'src/app/services/firebase-prod.service';
import { Person } from 'src/app/models/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  person = {} as Person;
  constructor(public personService: FirebaseProdService) { }

  ngOnInit() {
  }

  AgregarProducto(){
    this.personService.addPerson(this.person);
    this.person={} as Person;
  }


  
}
