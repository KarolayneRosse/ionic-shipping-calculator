import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShippPage } from './shipp.page';

describe('ShippPage', () => {
  let component: ShippPage;
  let fixture: ComponentFixture<ShippPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShippPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
