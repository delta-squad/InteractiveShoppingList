import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDialogComponent } from './shopping-list-dialog.component';

describe('ShoppingListDialogComponent', () => {
  let component: ShoppingListDialogComponent;
  let fixture: ComponentFixture<ShoppingListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
