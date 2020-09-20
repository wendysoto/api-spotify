import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminCrudPage } from './admin-crud.page';

describe('AdminCrudPage', () => {
  let component: AdminCrudPage;
  let fixture: ComponentFixture<AdminCrudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCrudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
