import { firstValueFrom, of, throwError } from "rxjs";
import { projects } from "../entity/project.entity";
import { ProjectService } from "../service/project.service"
import { ProjectStore } from "./project.store";

describe('Project store test suite', () => {

    const mockProjectService = {
        getProjects: jasmine.createSpy('getProjects')
    };

    beforeEach(() => {
        mockProjectService.getProjects.calls.reset();
    });

    it('Should load projects normally', async () => {
        const sut = new ProjectStore(mockProjectService as any as ProjectService, {} as any);

        mockProjectService.getProjects.and.returnValue(of(projects));
        sut.init();        

        const actual = await firstValueFrom(sut.projects$);

        expect(actual).toEqual(projects);
        expect(mockProjectService.getProjects).toHaveBeenCalledTimes(1);
    });

    it('Error should ocurr and projects should be empty', async () => {
        const sut = new ProjectStore(mockProjectService as any as ProjectService, {} as any);

        mockProjectService.getProjects.and.returnValue(throwError(() => new Error('A')));
        sut.init();

        const actual = await firstValueFrom(sut.projects$);

        expect(actual).toEqual([]);
    });

    it('Should return array of projects', async () => {
        const sut = new ProjectStore(mockProjectService as any as ProjectService, {} as any);

        mockProjectService.getProjects.and.returnValue(of(projects));
        sut.init();    

        const actual = sut.getById('PRJ006');
        expect(actual.id).toEqual('PRJ006');
        expect(actual).toBeDefined();
    });

    it('Should return empty array', async () => {
        const sut = new ProjectStore(mockProjectService as any as ProjectService, {} as any);

        mockProjectService.getProjects.and.returnValue(of(projects));
        sut.init();    

        const actual = sut.getById('AW');
        
        expect(actual).toBeUndefined();
        expect(actual).toBeFalsy();

    });
})