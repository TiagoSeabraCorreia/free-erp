import { firstValueFrom, Observable, of } from "rxjs";
import { tasks, TaskState } from "../entity/task.entity";
import { TaskService } from "./task.service";
import { tick } from "@angular/core/testing";

describe('Task store test  suit', () => {
    const mockTaskService = {
        getTasks: jasmine.createSpy()
    }

    const expected = [...tasks];

    it('getTasks function should return expected values', async () => {
        const sut = new TaskService();
        const actual = await firstValueFrom(sut.getTasks('PRJ006'));
        expect(actual).toEqual(expected);
    })

})