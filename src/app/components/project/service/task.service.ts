import { Injectable } from "@angular/core";
import { Task, tasks } from "../entity/task.entity";
import { of, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class TaskService{
    
    constructor(

    ){

    }

    getTasks(projectId: string) {
        const tasksToReturn =[ ...tasks];
        return of(tasksToReturn.filter((item: Task) => item.projectId == projectId));
    }
}