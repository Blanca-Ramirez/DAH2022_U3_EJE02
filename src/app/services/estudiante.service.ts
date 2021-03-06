import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Estudiante } from '../models/estudiante';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private firestore: AngularFirestore) { }

  getStudents() { 
    return this.firestore.collection('estudiante').snapshotChanges();
  }

  updateStudent(student: Estudiante, id: String) {
    this.firestore.doc('estudiante/' + id).update(student);
  }

}
