import { Component } from '@angular/core';
import { UiStore } from '../../ui/store/ui.store';
import { TaskStore } from '../../project/store/task.store';
import { TaskState } from '../../project/entity/task.entity';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'


@Component({
  selector: 'app-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {

  dropdownOpen: any = false;
  taskStateValues = Object.values(TaskState);
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  formGroup = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    }
  );
  
  selectedState: TaskState = TaskState.TODO;

  constructor(
    readonly uiStore: UiStore,
    private readonly taskStore: TaskStore
  ){

  }

  submit() {
    const newTask = {
    id: 'TSK001',
    projectId: 'PRJ006',
    title: this.formGroup.controls.description.value!,
    description: this.formGroup.controls.description.value!,
    status: TaskState.DONE,
    dueDate: '2025-02-10',
    createdAt: new Date('2025-01-05'),
    }

    this.taskStore.addTask(newTask);
  }

  getReadableValue(_t24: TaskState) {
    const map: Record<TaskState, string> = {
      [TaskState.TODO]: 'To Do',
      [TaskState.ONGOING]: 'In Progress',
      [TaskState.DONE]: 'Done',
    };
  }

  changeSelectedState(_t27: TaskState) {
    this.selectedState = _t27;
    this.dropdownOpen = false;
  }

}
