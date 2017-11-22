import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu.component';

import { MyMaterialModule } from '../MyMaterialModule';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs/Observable';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  let dishServiceStub = {
    getDishes: function(): Observable<Dish[]>{
        return Observable.of(DISHES);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MyMaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes(
          [{path: 'menu', component: MenuComponent}]
        )
      ],
      declarations: [ MenuComponent ],
      providers: [
        {provide: DishService, useValue: dishServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
    .compileComponents();

    let dishService = TestBed.get(DishService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
