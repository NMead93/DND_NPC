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
  constructor(private createService: CreateService) { }

  ngOnInit() {
  }

  finishCreate(name: string, race: string, gender: string,  characterClass: string){
      let newCharacter: Character = new Character(name, race, gender, characterClass);
      this.createService.addCharacter(newCharacter);
  }
}
