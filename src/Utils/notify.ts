import { Notyf } from "notyf";

class Notify {
	public notyf = new Notyf({
        duration: 3000,
        position: {x: "right", y: "bottom"},
        dismissible: true
    })

    public success(message: string){
        this.notyf.success(message);
    }
    
    public error(message: string){
        this.notyf.error(message);
    }

    public extractMessage(err: any){
        if (typeof err === "string") return err;
        if (typeof err?.response?.data === "string") return err.response.data;
        if (typeof err.message === "string") return err.message;
        return "Unknown error, please try again.";
    }
}

export const notify = new Notify();
