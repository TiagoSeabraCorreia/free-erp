import { effect, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UiStore{
    showToast = signal(false);
    currentMessage: ToastMessage | undefined = undefined;

    showModal = signal(false);
    initialized = signal(false);

    constructor(){

    }

    toggleModal(){
        if(this.initialized() == false)
            this.initialized.set(true);
        this.showModal.set(!this.showModal());
    }

    toggleToast(){
        if (this.showToast() == false){
            this.showToast.set(true);
            setTimeout(() => {
                this.showToast.set(false);
            }, 3000)
        }
        else{
            this.showToast.set(false);            
            
        }
    }

    showMessage(message: string){
        this.currentMessage = {
            message: message,
            type: ''
        };
        this.toggleToast();
    }

    showErrorMessage(message: string){
        this.currentMessage = {
            message: message,
            type: 'error'
        };

        this.toggleToast();
    }

    showOkMessage(message: string){
        this.currentMessage = {
            message: message,
            type: 'ok'
        };
        this.toggleToast();
    }
}

export interface ToastMessage {
    message: string, 
    type: string
}