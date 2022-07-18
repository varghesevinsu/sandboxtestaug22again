import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@app/auth/auth.service";
import { AppUtilBaseService } from "@baseapp/app-util.base.service";
import { MessageService } from "primeng/api";


export class LoginComponentBase{
    form: FormGroup = new FormGroup({});
    formErrors:any = {};

    formControls = {
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required]),
        rememberMe: new FormControl()
    };

    constructor(
        public router : Router,
        public appUtilService : AppUtilBaseService,
        public messageService: MessageService,
        public authService: AuthService,
    ){}
    onInit() {
        this.initForm();
    }

    initForm(){
        this.form = new FormGroup(this.formControls);
    }

    authenticate(){
        const data = this.form.getRawValue();
        const errors: string[] = []
        if(this.appUtilService.isValidForm(this.form, this.formErrors, errors)){
            this.authService.authenticate(data).subscribe(
                res =>{
                    this.showMessage({severity:'success', summary:'', detail:'Record Saved Successfully'});
                },
                error =>{
                    this.showMessage({severity:'error', summary:'Error', detail:'Error'});
                }
            )
            

        }else{
            if(errors.length){
                this.showMessage({severity:'error', summary:'Error', detail:errors.join('<br> ')});
            }
        }
    }

    showMessage(config:any){
        this.messageService.clear();
        this.messageService.add(config);
    }

    loadForgotPasswordPage(){
        this.router.navigateByUrl('auth/forgot-password')
    }

}
