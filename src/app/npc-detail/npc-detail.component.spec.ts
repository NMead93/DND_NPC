import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcDetailComponent } from './npc-detail.component';

describe('NpcDetailComponent', () => {
  let component: NpcDetailComponent;
  let fixture: ComponentFixture<NpcDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
