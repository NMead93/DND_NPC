import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Character } from './character.model';

@Injectable()
export class CreateService {
characterList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private http: Http) {
      this.characterList = database.list('characters');
  }

  addCharacter(newCharacter: Character) {
      this.characterList.push(newCharacter);
  }
  getEquipInfoCall() {
    return this.http.get("http://www.dnd5eapi.co/api/equipment")
        .map((res:Response) => res.json());
  }

  getCharacterList(){
    return this.characterList;
  }
}
