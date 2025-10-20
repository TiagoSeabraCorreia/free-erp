import { Injectable } from "@angular/core";
import { ProjectService } from "../service/project.service";
import { BehaviorSubject } from "rxjs";
import { Project } from "../entity/project.entity";
import { ProjectStore } from "./project.store";



@Injectable({
    providedIn: 'root'
})

export class CurrentProjectStore {
    projectData$: BehaviorSubject<Project | null> = new BehaviorSubject<Project | null>(null);
    projectDataObservable$ = this.projectData$.asObservable(); 
    
    constructor(
        private readonly projectStore: ProjectStore
    ){

    }

    getProjectData(id: string){

    }

    init(){
        
    }

    
}

