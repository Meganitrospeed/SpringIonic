import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBicyclePage } from './add-bicycle.page';

describe('AddBicyclePage', () => {
  let component: AddBicyclePage;
  let fixture: ComponentFixture<AddBicyclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBicyclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBicyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
