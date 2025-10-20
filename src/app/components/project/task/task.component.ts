import { Component, Input, OnInit, signal } from '@angular/core';
import { TaskStore } from '../store/task.store';
import { Task, tasks, TaskState } from '../entity/task.entity';
import { AsyncPipe, DatePipe } from '@angular/common';
import { UiStore } from '../../ui/store/ui.store';

@Component({
  selector: 'app-task',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit{

  tasks$;
  @Input() projectId!: string;
  isOpen = signal(-1);

  constructor(
    private readonly taskStore: TaskStore,
    readonly uiStore: UiStore
  ){
    this.tasks$ = this.taskStore.taskObservable$;
  }

  ngOnInit(): void {
    this.taskStore.init(this.projectId);
  }

  toggleDropdown(openId: number){
    const id ={
      id: openId
    }

    if (this.isOpen() == openId)
      id.id = -1;

    this.isOpen.set(id.id);
  } 

  onView(task: Task){

  }
  onDelete(task: Task){

  }

  onEdit(task: Task){

  }  

  isOnGoing(item: TaskState) {
    return item == TaskState.ONGOING;
  }

  isDone(item: TaskState) {
    return item == TaskState.DONE;
  }

  isTodo(item: TaskState) {
    return item == TaskState.TODO;
  }
}
