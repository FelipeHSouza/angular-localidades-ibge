import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTitleComponent } from './toolbar-title.component';

describe('ToolbarTitleComponent', () => {
  let component: ToolbarTitleComponent;
  let fixture: ComponentFixture<ToolbarTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
