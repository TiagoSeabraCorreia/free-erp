import { firstValueFrom, Observable, of } from "rxjs";
import { TaskState } from "../entity/task.entity";
import { TaskStore } from "./task.store";

describe('Task store test  suit', () => {
    const mockTaskService = {
        getTasks: jasmine.createSpy()
    }

    const expected = [
        {
          id: 'TSK001',
          projectId: 'PRJ006',
          title: 'Set up database schema',
          description: 'Create collections and indexes for project management.',
          status: TaskState.DONE,
          dueDate: '2025-02-10',
          createdAt: new Date('2025-01-05'),
        },
        {
          id: 'TSK002',
          projectId: 'PRJ006',
          title: 'Implement authentication',
          description: 'Add login and role-based access control.',
          status: TaskState.ONGOING,
          dueDate: '2025-02-28',
          createdAt: new Date('2025-01-12'),
        }
      ];

    it('It should load the expected data into the subject', () => {
        const sut = new TaskStore(mockTaskService);
        mockTaskService.getTasks.and.returnValue(of(expected));
        sut.init('PRJ006');
        expect(sut.taskSubject$.value).toEqual(expected);
    })

    it('tasksObservable$ should have correct values', async () => {
        const sut = new TaskStore(mockTaskService);
        mockTaskService.getTasks.and.returnValue(of(expected));
        sut.init('PRJ006');
        expect(mockTaskService.getTasks).toHaveBeenCalled();
        expect(sut.taskObservable$).toBeInstanceOf(Observable);
        const actual = await firstValueFrom(sut.taskObservable$);
        expect(actual).toEqual(expected);
    })

    it('Subject data should be null', async () => {
        const sut = new TaskStore(mockTaskService);
        mockTaskService.getTasks.and.returnValue(of(new Error('Error')));
        sut.init('PRJ006');
        const actual = sut.taskObservable$;
        expect(actual).toBeInstanceOf(Observable);
        expect(sut.taskSubject$.value).toEqual(null);
    })
})