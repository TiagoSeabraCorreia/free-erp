import { Injectable } from "@angular/core";
import { ProjectService } from "../service/project.service";
import { BehaviorSubject, tap } from "rxjs";
import { Project } from "../entity/project.entity";
import { ProjectStore } from "./project.store";
import { UiStore } from "../../ui/store/ui.store";

@Injectable({
    providedIn: 'root'
})
export class CurrentProjectStore {
    currentProjectData$: BehaviorSubject<Project | null> = new BehaviorSubject<Project | null>(null);
    currentProjectDataObservable$ = this.currentProjectData$.asObservable(); 
    
    constructor(
        private readonly projectStore: ProjectStore,
    ){

    }

    init(id: string){
        const project = this.projectStore.getById(id);
        if (!project){
            return;
        }

        this.currentProjectData$.next(project); 
    }
}

