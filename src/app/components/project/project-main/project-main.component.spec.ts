import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMainComponent } from './project-main.component';
import { ProjectStore } from '../store/project.store';
import { projects } from '../entity/project.entity';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('ProjectMainComponent', () => {
  let component: ProjectMainComponent;
  let fixture: ComponentFixture<ProjectMainComponent>;
  const mockProjectStore = {
    projects$:  of(projects),
    init: jasmine.createSpy('init')
  }

  const mockRouter = {
    navigate: jasmine.createSpy()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMainComponent],
      providers: [
        {provide: ProjectStore, useValue: mockProjectStore },
        {provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 items with class .card', () => {
    const cards = fixture.nativeElement.querySelectorAll('.card');
    expect(mockProjectStore.init).toHaveBeenCalled();
    expect(cards.length).toBe(7);
<<<<<<< HEAD
  })

  it('Should navigate', () => {
    component.navigate('A');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/projects/A']);
    
=======
>>>>>>> main
  })
});
