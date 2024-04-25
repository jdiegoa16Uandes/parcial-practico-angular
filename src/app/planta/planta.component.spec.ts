

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { HttpClientModule } from '@angular/common/http';
import { PlantaComponent } from '../planta/planta.component'
import { PlantaService } from './planta.service';
import { Planta } from './planta';


describe('Service: Movies', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaComponent ],
      providers: [ PlantaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 1 <tr.table-dark> elements', () => {
    expect(debug.queryAll(By.css('tr.table-dark'))).toHaveSize(1)
  });
  it('should have 3 <tr.col> elements', () => {
    expect(debug.queryAll(By.css('tr.col'))).toHaveSize(3)
  });
  it('should have <div.types> element', () => {
    expect(debug.queryAll(By.css('div.types'))).toBeDefined()
  });
  it('should have <th.id> element', () => {
    expect(debug.queryAll(By.css('th.id'))).toHaveSize(3)
  });
  it('should have <td.name> element', () => {
    expect(debug.queryAll(By.css('td.name'))).toHaveSize(3)
  });
  it('should have <td.type> element', () => {
    expect(debug.queryAll(By.css('td.type'))).toHaveSize(3)
  });
  it('should have <td.weather> element', () => {
    expect(debug.queryAll(By.css('td.weather'))).toHaveSize(3)
  });
  it('should have the corresponding id', () => {
    debug.queryAll(By.css('th.id')).forEach((id, i)=>{
      expect(Number(id.nativeElement.textContent.trim())).toEqual(
        component.plantas[i].id)
    })
  });


});
