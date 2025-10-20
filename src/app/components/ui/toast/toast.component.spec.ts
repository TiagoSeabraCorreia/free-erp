import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { ToastMessage, UiStore } from '../store/ui.store';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  const mockCurrentMessage: ToastMessage = {
    message: 'Teste!',
    type: 'ok'
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
      providers: [
        {
          provide: UiStore,
          useValue:{
            currentMessage: mockCurrentMessage
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Toast should render', () => {
    const element = fixture.nativeElement.querySelector('.toast');
    
    expect(element).toBeDefined();
  })

   it('Message content should match mockUiStore', () => {

    const element = fixture.nativeElement.querySelector('.message>span');
    expect(element.textContent.trim()).toEqual(mockCurrentMessage.message);    
  })

  it('Message content should match mockUiStore', () => {

    const okElement = fixture.nativeElement.querySelector('.ok');
    expect(okElement).toBeDefined();
  })

  it('Error message should exist', () => {
    mockCurrentMessage.type = 'error';
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.querySelector('.error');
    expect(errorElement).toBeTruthy();
  })

  it('Normal message should be truthty', () => {
    mockCurrentMessage.type = '';
    fixture.detectChanges();
    const okElement = fixture.nativeElement.querySelector('.toast');

    expect(okElement).toBeTruthy();
  });

  it('Progress bar should load', () => {
    const okElement = fixture.nativeElement.querySelector('.toast>.progress');
    
    expect(okElement).toBeTruthy();
  })
  
});
