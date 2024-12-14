import { inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces/user/user.interface";

export class UserFormController {

    userForm!: FormGroup
    private _fb = inject(FormBuilder)
    constructor() {
        this.createUserForm()
    }

    get generalInformation(): FormGroup {
        return this.userForm.get('generalInformation') as FormGroup
    }

    fulfillUserForm(user: IUser) {
        this.fulfillGeneralInformation(user)
    }

    private fulfillGeneralInformation(user: IUser) {
        this.generalInformation.patchValue(user);
        console.log(this.userForm);        
    }

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformation: this._fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
                country: ['', Validators.required],
                state: ['', Validators.required],
                maritalStatus: [null, Validators.required],
                monthlyIncome: [null, Validators.required],
                birthDate: [null, Validators.required],
            }),
            contactInformation: this._fb.group({    
                phoneList: this._fb.array([]),
                addressList: this._fb.array([]),
                
            }),
            dependentsInformation: this._fb.array([])
        })
    }
}