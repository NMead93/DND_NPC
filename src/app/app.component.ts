import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DM-manager';
  formShowing: boolean;

  constructor(){
    this.formShowing = false;
  }

  hideForm(){
    this.formShowing = false;
    console.log("hide form", this.formShowing)
  }

  showForm(){
    this.formShowing = true;
    console.log("show form", this.formShowing)
  }
}
