import { Component } from '@angular/core';
import { UiStore } from '../../ui/store/ui.store';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  constructor(
    readonly uiStore: UiStore
  ){

  }
}
