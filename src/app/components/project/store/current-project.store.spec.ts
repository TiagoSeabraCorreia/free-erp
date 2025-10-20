import { firstValueFrom } from "rxjs";
import { projects } from "../entity/project.entity";
import { CurrentProjectStore } from "./current-project.store"
import { ProjectStore } from "./project.store";

describe('CurrentProjectStore test suite ', () => {
    const mockProjectStore = {
        getById: jasmine.createSpy()
    }

    let sut: CurrentProjectStore;
    const mockProjects = [...projects];
    const expected = mockProjects[0];

    beforeEach(()=> {
        sut = new CurrentProjectStore(mockProjectStore as any as ProjectStore);
    })

    it('Should init correctly', async () => {
        mockProjectStore.getById.and.returnValue(expected);
        sut.init(expected.id);
        let actual = sut.currentProjectData$.value;
        let actualObs = sut.currentProjectDataObservable$;

        const actualDataFromSubscriber = await firstValueFrom(actualObs);
        expect(actual).toEqual(expected);
        expect(actualDataFromSubscriber).toEqual(expected);
    })
    
    it('Should init with error - subject should be null', async () => {
        mockProjectStore.getById.and.returnValue(null);
        sut.init(expected.id);
        let actual = sut.currentProjectData$.value;
        let actualObs = sut.currentProjectDataObservable$;

        const actualDataFromSubscriber = await firstValueFrom(actualObs);

        expect(actual).toBeFalsy();
        expect(actualDataFromSubscriber).toBeFalsy();
    })
})
