import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Person } from '../models/persona';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProdService {

  personsCollection: AngularFirestoreCollection <Person>;
  persons:Observable<Person[]>;
  personDoc : AngularFirestoreDocument <Person>;

  constructor(public db: AngularFirestore) { 
   
  }

  getProducts(){
    // return this.persons= this.db.collection('Producto').valueChanges();
    this.personsCollection = this.db.collection('Producto');
    return this.persons = this.personsCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as Person;
        data.id = a.payload.doc.id;
        return data;
      });
    }))


  }

  deletePerson(person: Person){
    this.personDoc = this.db.doc(`Producto/${person.id}`);
    this.personDoc.delete();

  }

  addPerson(person: Person){
    this.personsCollection.add(person);
  }


  updatePerson(person: Person){
    this.personDoc = this.db.doc(`Producto/${person.id}`);
    this.personDoc.update(person);
  }
}
