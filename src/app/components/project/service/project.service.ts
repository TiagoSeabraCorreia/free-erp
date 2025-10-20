import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project, projects } from "../entity/project.entity";
import { Observable, of, throwError } from "rxjs";



@Injectable({
    providedIn: "root"
})
export class ProjectService{
    constructor(
    ){
        
    }

    getProjectById(id: string): Observable<Project>{
        const projectsWithGivenId = projects.filter((item) => item.id == id);
        return projectsWithGivenId.length == 0 ? of(projectsWithGivenId[0]) : throwError(() => new Error("Nao existe nenhum projeto com o id"));
    }

    getProjects(): Observable<Project[]>{
        return of(projects);
    }
}