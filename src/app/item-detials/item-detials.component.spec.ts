import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetialsComponent } from './item-detials.component';

describe('ItemDetialsComponent', () => {
  let component: ItemDetialsComponent;
  let fixture: ComponentFixture<ItemDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
