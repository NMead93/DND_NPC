import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Character } from '../character.model';
import { CreateService } from '../create.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CreateService]
})
export class CreateComponent implements OnInit
{
  @Output() doneWithForm = new EventEmitter();
  addedItemList: Item[] = [];
  strength: number = 10;
  dexterity: number = 10;
  constitution: number = 10;
  intelligence: number = 10;
  wisdom: number = 10;
  charisma: number = 10;
  constructor(private createService: CreateService) { }

  ngOnInit() {
  }

  finishCreate(name: string, race: string, gender: string,  characterClass: string, newStrength: number, newDexterity: number, newConstitution: number, newIntelligence: number, newWisdom: number, newCharisma: number){
      let newCharacter: Character = new Character(name, race, gender, characterClass, newStrength, newDexterity, newConstitution, newIntelligence, newWisdom, newCharisma, this.addedItemList);
      console.log(newCharacter);
      this.createService.addCharacter(newCharacter);
      this.doneWithForm.emit(true);
      this.addedItemList = [];
  }

  addToCreatePlayerItemList(newItem) {
    this.addedItemList.push(newItem);
    console.log(this.addedItemList);
  }

}
