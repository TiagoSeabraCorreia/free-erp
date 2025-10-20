import { Injectable } from "@angular/core";
import { TaskService } from "../service/task.service";
import { BehaviorSubject, catchError, EMPTY, filter, tap } from "rxjs";
import { Task, TaskState } from "../entity/task.entity";

@Injectable({
    providedIn: 'root'
})
export class TaskStore {
    
    taskSubject$ = new BehaviorSubject< Task[]| null>(null);
    taskObservable$ = this.taskSubject$.asObservable();
    constructor(
        private readonly taskService: TaskService        
    ){

    }

    init(projectId: string) {
        
        if (!projectId) return;

        this.taskService.getTasks(projectId)
            .pipe(
                filter((data: Task[]) => {
                    return data.length == data.filter((item: Task) => item.projectId == projectId).length;
                }),
                tap((data: Task[]) => {
                    this.taskSubject$.next(data)
                }),
                catchError(() => {
                    this.taskSubject$.next(null);
                    return EMPTY
                })
            ).subscribe();
    }

    addTask(newTask: Task) {
        const currentTasks = this.taskSubject$.value;
        currentTasks?.push(newTask);

        this.taskSubject$.next(currentTasks);
    }
}