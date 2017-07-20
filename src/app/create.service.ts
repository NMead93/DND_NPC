import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Character } from './character.model';

@Injectable()
export class CreateService {
characterList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
      this.characterList = database.list('characters');
  }

  addCharacter(newCharacter: Character) {
      this.characterList.push(newCharacter);
  }

  getCharacterList(){
    return this.characterList;
  }
}
