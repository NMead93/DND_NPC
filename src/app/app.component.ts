import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Character } from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CreateService]
})
export class AppComponent implements OnInit{
  title = 'DM-manager';
  formShowing: boolean;
  characterList: FirebaseListObservable<any[]>;
  subscribedCharacterList: any[];
  selectedNPC: Character;

  constructor(private createService: CreateService){
    this.formShowing = false;
  }

  ngOnInit(){
    this.characterList = this.createService.getCharacterList();
    this.characterList.subscribe(data => {
      this.subscribedCharacterList = data;
    })
  }

  hideForm(){
    this.formShowing = false;
    console.log("hide form", this.formShowing)
  }

  showForm(){
    this.formShowing = true;
    console.log("show form", this.formShowing)
  }

  npcDetail(npc){
    this.selectedNPC = npc;
  }
}
