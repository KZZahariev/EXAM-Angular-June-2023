import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsListComponent } from './announcements-list.component';

describe('AnnouncementsListComponent', () => {
  let component: AnnouncementsListComponent;
  let fixture: ComponentFixture<AnnouncementsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsListComponent]
    });
    fixture = TestBed.createComponent(AnnouncementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
