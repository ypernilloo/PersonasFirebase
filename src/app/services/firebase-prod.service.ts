import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Person } from '../models/persona';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProdService {

  personsCollection: AngularFirestoreCollection <Person>;
  mensajeCollection: AngularFirestoreCollection <Person>;

  mensajes: Observable<Mensaje[]>;
  persons:Observable<Person[]>;

  personDoc : AngularFirestoreDocument <Person>;
  mensajeDoc : AngularFirestoreDocument <Mensaje>;

  constructor(public db: AngularFirestore) { 
   
  }

  getProducts(){
    this.personsCollection = this.db.collection('Usuarios');
    return this.persons = this.personsCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as Person;
        data.id = a.payload.doc.id;
        return data;
      });
    }))


  }

  getMessages(){
    this.mensajeCollection = this.db.collection('Usuarios').doc('OVYMpNTz1Bdc2o6xIz9b').collection('Mensajes');

    return this.mensajes = this.mensajeCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as Person;
        data.id = a.payload.doc.id;
        return data;
      });
    }))
  }

  deletePerson(person: Person){
    this.personDoc = this.db.doc(`Usuarios/${person.id}`);
    this.personDoc.delete();

  }

  addPerson(person: Person){
    this.personsCollection.add(person);
  }


  updatePerson(person: Person){
    this.personDoc = this.db.doc(`Usuarios/${person.id}`);
    this.personDoc.update(person);
  }
}
