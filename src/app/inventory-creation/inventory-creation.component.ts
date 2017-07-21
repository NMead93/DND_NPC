import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateService } from '../create.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-inventory-creation',
  templateUrl: './inventory-creation.component.html',
  styleUrls: ['./inventory-creation.component.css']
})
export class InventoryCreationComponent implements OnInit {
  equipmentQueryResults: { name: string, url: string }[] = [];
  displayMultiItemPrompt: boolean = false;
  selectedItemApiUrl: string;
  @Output() newItemAdded = new EventEmitter();

  constructor(private createService: CreateService) { }

  ngOnInit() {
  }

  getAllEquipmentData(equipmentName: string) {
    this.createService.getEquipInfoCall().subscribe(data => {
      var response = data;
      var currentContext = this;
      this.equipmentQueryResults = [];
      //must loop through response because api call is stupid and can't request by name
      for (var i = 0; i < response.results.length; i++) {
        if(response.results[i].name.toLowerCase().includes(equipmentName.toLowerCase())) {
          currentContext.equipmentQueryResults.push(response.results[i]);
        }
      }

      if (currentContext.equipmentQueryResults.length > 1) {
        let message: string = "Which item did you mean? ";

        for (var i = 0; i < currentContext.equipmentQueryResults.length; i++) {
          message += currentContext.equipmentQueryResults[i].name + " ";
        }

        currentContext.displayMultiItemPrompt = true;
      } else if (currentContext.equipmentQueryResults.length == 1) {
        console.log("one item returned");
      } else {
        console.log("Item doesn't exist.....dumbass");
      }
    })
  }


  addItem() {
    this.displayMultiItemPrompt = false;
    var currentContext = this;
    this.createService.getIndividualEquipment(this.selectedItemApiUrl).subscribe(data => {
      var response = data;
      currentContext.newItemAdded.emit(new Item(response.name, response.equipment_category, response.cost.quantity, response.cost.unit));

    })
  }

}
