import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project, projects } from "../entity/project.entity";
import { Observable, of, throwError } from "rxjs";



@Injectable({
    providedIn: 'root',
})
export class ProjectService{

    constructor(
    ){

    }

    getProjects(): Observable<Project[]>{
        return of([...projects]);
    }
}

