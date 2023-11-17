// https://medium.com/@serpentarium13/how-to-toast-on-your-own-in-vue-5962c0f954d1
import { defineStore } from "pinia";

export type TToastStatus = "success" | "warning" | "error";

interface IToast {
    text: string;
    status: TToastStatus;
    id: number
}

type ToastPayload = { timeout?: number; text: string };
const defaultTimeout: number = 2000;

const createToast = (text: string, status: TToastStatus): IToast => ({
    text,
    status,
    id: Math.random() * 1000,
});


export const useToasterStore = defineStore("toaster-store", {
    state: (): { toasts: IToast[] } => ({
        toasts: []
    }),
    actions: {
        updateState(payload: ToastPayload, status: TToastStatus) {
            const { text, timeout } = payload;
            const toast = createToast(text, status);

            this.toasts.push(toast);

            setTimeout(() => {
                this.toasts = this.toasts.filter((t) => t.id !== toast.id);
            }, timeout ?? defaultTimeout)
        },
        success(payload: ToastPayload) {
            this.updateState(payload, "success")
        },
        warning(payload: ToastPayload) {
            this.updateState(payload, "warning")
        },
        error(payload: ToastPayload) {
            this.updateState(payload, "error")
        },
    }
})