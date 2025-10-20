import { Component } from '@angular/core';
import { HoverDirective } from './hover.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  imports: [HoverDirective],
  template:`
    <span appHoverEffect >a</span>
  `,
  standalone: true
})
class TestComponent { }
describe('HoverDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const element = fixture.nativeElement.querySelector('span');
    expect(element).toBeTruthy();

    element.dispatchEvent(new Event('mouseenter'));
    expect(element.style.transform).toBe('scale(1.05)');

    element.dispatchEvent(new Event('mouseleave'));
    expect(element.style.transform).toBe('scale(1)');
  });
});
