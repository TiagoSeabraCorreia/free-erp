import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/ui/toast/toast.component';
import { CreateComponent } from "./components/task/create/create.component";
import { CommonModule } from '@angular/common';
import { UiStore } from './components/ui/store/ui.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent, CreateComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'free-erp';

  constructor(
    readonly uiStore: UiStore
  ){

  }
}
