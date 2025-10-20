import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectOverviewComponent } from './project-overview.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CurrentProjectStore } from '../store/current-project.store';

let component: ProjectOverviewComponent;
  let fixture: ComponentFixture<ProjectOverviewComponent>;
  let mockActivatedRoute = {
    snapshot:{
      paramMap:{
        get: (key: string) => (key === 'id' ? 'PRJ006' : null)
      }
    }
  }

  let expected = {
    id: "PRJ006",
    creationDate: new Date('2025-01-10'),
    name: 'Inventory Management System',
    dueDate: '2025-03-15',
    description: 'A system to track stock levels, purchases, and deliveries.'
  };

  let mockCurrentProjectStore = {
    init: jasmine.createSpy(),
    currentProjectData$: of(expected)
  }

describe('ProjectOverviewComponent', () => {
  

 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOverviewComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: mockActivatedRoute
        },
        {
          provide: CurrentProjectStore, useValue: mockCurrentProjectStore
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a card with the given name', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('h1');
    expect(element.textContent.trim()).toEqual(expected.name);
    expect(mockCurrentProjectStore.init).toHaveBeenCalled();
    expect(mockCurrentProjectStore.init).toHaveBeenCalledWith('PRJ006');

  })
});

describe('ProjectOverviewComponent with null route id', () => {
  let component: ProjectOverviewComponent;
  let fixture: ComponentFixture<ProjectOverviewComponent>;
  let mockActivatedRoute: any;
  let mockCurrentProjectStore: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => null
        }
      }
    };

    mockCurrentProjectStore = {
      init: jasmine.createSpy(),
      currentProjectData$: of(null)
    };

    await TestBed.configureTestingModule({
      imports: [ProjectOverviewComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: CurrentProjectStore, useValue: mockCurrentProjectStore }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should call init with empty string when no id is found', () => {
    expect(mockCurrentProjectStore.init).toHaveBeenCalledOnceWith('');
  });
});
