import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-npc-detail',
  templateUrl: './npc-detail.component.html',
  styleUrls: ['./npc-detail.component.css']
})
export class NpcDetailComponent implements OnInit {
  @Input() selectedNPC;
  constructor() { }

  ngOnInit() {
  }

}
