import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateBicyclePage } from './update-bicycle.page';

describe('UpdateBicyclePage', () => {
  let component: UpdateBicyclePage;
  let fixture: ComponentFixture<UpdateBicyclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBicyclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateBicyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
