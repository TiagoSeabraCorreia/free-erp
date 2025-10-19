import { Injectable } from "@angular/core";
import { ProjectService } from "../service/project.service";
import { BehaviorSubject, catchError, EMPTY, of, tap, throwError } from "rxjs";
import { Project } from "../entity/project.entity";


@Injectable({
    providedIn: 'root'
})

export class ProjectStore {
    

    projectsSubject$: BehaviorSubject<Project[] | null> = new BehaviorSubject<Project[] | null>(null);
    projects$ = this.projectsSubject$.asObservable();

    
    constructor(
        private readonly projectService: ProjectService
    ){
        
    }

    init(){
        this.projectService.getProjects().pipe(
            tap((data: Project[]) => {
                console.log(data, 'A');
            }),
            tap((data) => {
                this.projectsSubject$.next(data);
            }),
            catchError(() => {
                this.projectsSubject$.next([]);
                return EMPTY;
            })
        ).subscribe();
    }

    getById(id: string) {
        console.log(this.projectsSubject$.value);
        const filtered = this.projectsSubject$.value?.filter((item: Project) => item.id == id)[0];

        return filtered!;
    }
}

