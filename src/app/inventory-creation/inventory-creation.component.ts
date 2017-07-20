import { Component, OnInit } from '@angular/core';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-inventory-creation',
  templateUrl: './inventory-creation.component.html',
  styleUrls: ['./inventory-creation.component.css']
})
export class InventoryCreationComponent implements OnInit {
  equipmentQueryResults: { name: string, url: string }[] = [];
  displayMultiItemPrompt: boolean = false;

  constructor(private createService: CreateService) { }

  ngOnInit() {
  }

  getEquipmentData(equipmentName: string) {
    this.createService.getEquipInfoCall().subscribe(data => {
      var response = data;
      var currentContext = this;
      //must loop through response because api call is stupid and can't request by name
      for (var i = 0; i < response.results.length; i++) {
        if(response.results[i].name.toLowerCase().includes(equipmentName)) {
          currentContext.equipmentQueryResults.push(response.results[i]);
        }
      }

      if (currentContext.equipmentQueryResults.length > 1) {
        let message: string = "Which item did you mean? ";

        for (var i = 0; i < currentContext.equipmentQueryResults.length; i++) {
          message += currentContext.equipmentQueryResults[i].name + " ";
        }

        currentContext.displayMultiItemPrompt = true;
      }
    })
  }

}
