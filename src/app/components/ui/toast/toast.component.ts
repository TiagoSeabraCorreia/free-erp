import { Component } from '@angular/core';
import { UiStore } from '../store/ui.store';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  constructor(
    readonly uiStore: UiStore
  ){

  }
}
