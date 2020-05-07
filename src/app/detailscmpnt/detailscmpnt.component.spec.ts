import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscmpntComponent } from './detailscmpnt.component';

describe('DetailscmpntComponent', () => {
  let component: DetailscmpntComponent;
  let fixture: ComponentFixture<DetailscmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailscmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
