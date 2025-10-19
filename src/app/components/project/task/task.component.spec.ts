import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { Task, TaskState } from '../entity/task.entity';
import { firstValueFrom, Observable, of } from 'rxjs';
import { TaskStore } from '../store/task.store';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  const expected = [
    {
      id: 'TSK001',
      projectId: 'PRJ006',
      title: 'Set up database schema',
      description: 'Create collections and indexes for project management.',
      status: TaskState.DONE,
      dueDate: '2025-02-10',
      createdAt: new Date('2025-01-05'),
    },
    {
      id: 'TSK002',
      projectId: 'PRJ006',
      title: 'Implement authentication',
      description: 'Add login and role-based access control.',
      status: TaskState.ONGOING,
      dueDate: '2025-02-28',
      createdAt: new Date('2025-01-12'),
    }
  ];

  const mockTaskStore = {
    taskObservable$: of(expected),
    init: jasmine.createSpy()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent],
      providers: [
        {provide: TaskStore, useValue: mockTaskStore}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.projectId = 'PRJ006';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Expected tasks should match actual', async () => {
    expect(mockTaskStore.init).toHaveBeenCalled();
    expect(mockTaskStore.taskObservable$).toBeInstanceOf(Observable);
    const actual = await firstValueFrom(mockTaskStore.taskObservable$);
    expect(actual).toEqual(expected);
    expect(actual.length).toBe(expected.length);
  });

  it('Expected tasks should actual', async () => {
    const htmlTasks = fixture.nativeElement.querySelectorAll('.task');
    console.log(htmlTasks);
    expect(htmlTasks.length).toBe(2);
  });

  it('Dropdown should open and close', fakeAsync (() => {
    const dropdown = fixture.nativeElement.querySelector('.options');
    const dropdownButton = fixture.nativeElement.querySelector('.options-button');
    dropdownButton.dispatchEvent(new Event('click'));
    tick(400);
    fixture.detectChanges();
    
    expect(component.isOpen()).toBe(0);
    expect(dropdown.classList).toContain('show');

    dropdownButton.dispatchEvent(new Event('click'));
    tick(400);
    fixture.detectChanges();
    
    expect(component.isOpen()).toBe(-1);
    expect(dropdown.classList).not.toContain('show');
  }));
});
