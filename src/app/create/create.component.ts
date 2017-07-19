import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CreateService]
})
export class CreateComponent implements OnInit
{
    strength: number = 10;
    dexterity: number = 10;
    constitution: number = 10;
    intelligence: number = 10;
    wisdom: number = 10;
    charisma: number = 10;
  constructor(private createService: CreateService) { }

  ngOnInit() {
  }

  finishCreate(name: string, race: string, gender: string,  characterClass: string){
      let newCharacter: Character = new Character(name, race, gender, characterClass);
      this.createService.addCharacter(newCharacter);
  }
}
