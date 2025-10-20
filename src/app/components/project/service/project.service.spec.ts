import { firstValueFrom, Observable, of } from "rxjs";
import { projects } from "../entity/project.entity";
import { ProjectService } from "./project.service";


describe('Project service', () => {
    let sut: ProjectService;
    beforeEach(() => {
        sut = new ProjectService();
    })

    it('should create', () => {
        expect(sut).toBeTruthy();
    }) 

    it('should return a projects observable', async () => {
        const actual$ = sut.getProjects();
        const actual = await firstValueFrom(actual$);
        
        expect(actual$).toBeInstanceOf(Observable);
        expect(actual).toEqual(projects);
    }) 

    xit('Should return a project observable with the given ID', () => {

    })

    xit('Should return an observable with error inside', () => {
        
    })
})