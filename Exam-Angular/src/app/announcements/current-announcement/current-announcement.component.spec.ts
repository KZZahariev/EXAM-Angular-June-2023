import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAnnouncementComponent } from './current-announcement.component';

describe('CurrentAnnouncementComponent', () => {
  let component: CurrentAnnouncementComponent;
  let fixture: ComponentFixture<CurrentAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentAnnouncementComponent]
    });
    fixture = TestBed.createComponent(CurrentAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
