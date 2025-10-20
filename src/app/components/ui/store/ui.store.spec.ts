import { fakeAsync, tick } from "@angular/core/testing";
import { ToastMessage, UiStore } from "./ui.store";

describe('UiStore test suite', () => {
    let sut: UiStore;

    beforeEach(() =>{
        sut = new UiStore();
    });

    it('Modal should open and close', () => {
        expect(sut.showModal()).toBe(false);
        expect(sut.initialized()).toBe(false);
        sut.toggleModal();
        expect(sut.showModal()).toBe(true);
        expect(sut.initialized()).toBe(true);

        sut.toggleModal();
    })

    it('Toast should show and leave after 3000ms', fakeAsync(() =>{
        expect(sut.showToast()).toBe(false);
        sut.toggleToast();
        expect(sut.showToast()).toBe(true);
        tick(3001)
        expect(sut.showToast()).toBeFalse();
    }));

    it('Toast should show and leave on dismiss', () =>{
        expect(sut.showToast()).toBe(false);
        sut.toggleToast();
        expect(sut.showToast()).toBe(true);
        sut.toggleToast();
        expect(sut.showToast()).toBeFalse();
    });

    it('Toast should show message', () => {
        const expected: ToastMessage = {
            message: 'Teste!',
            type: ''
        }
        
        expect(sut.currentMessage).toBeUndefined();
        sut.showMessage('Teste!');
        expect(sut.currentMessage).toEqual(expected);
    });

    it('Toast should show error message', () => {
        const expected: ToastMessage = {
            message: 'Teste! error',
            type: 'error'
        }
        
        expect(sut.currentMessage).toBeUndefined();
        sut.showErrorMessage('Teste! error');
        expect(sut.currentMessage).toEqual(expected);
    });

    it('Toast should show success message', () => {
        const expected: ToastMessage = {
            message: 'Teste! ok',
            type: 'ok'
        }
        
        expect(sut.currentMessage).toBeUndefined();
        sut.showOkMessage('Teste! ok');
        expect(sut.currentMessage).toEqual(expected);
    });
});