import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces/user/user.interface";
import { PhoneList } from "../../types/phone-list";
import { AddressList } from "../../types/address-list";
import { DependentsList } from "../../types/dependent-list";
import { convertPtBrDateToDateObj } from "../../utils/convert-pt-br-date-to-date-obj";
import { preparePhoneList } from "../../utils/prepare-phone-list";
import { PhoneType } from "../../enums/phone-type.enum";
import { prepareAddressList } from "../../utils/prepare-address-list";
import { requiredAddressValidator } from "../../utils/user-form-validators/required-address-validator";

export class UserFormController {

    userForm!: FormGroup
    private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    private _fb = inject(FormBuilder)
    constructor() {
        this.createUserForm()
    }

    get generalInformation(): FormGroup {
        return this.userForm.get('generalInformation') as FormGroup
    }

    get phoneList(): FormArray {
        return this.userForm.get('contactInformation.phoneList') as FormArray
    }

    get addressList(): FormArray {
        return this.userForm.get('contactInformation.addressList') as FormArray
    }

    get dependentsList(): FormArray {
        return this.userForm.get('dependentsInformation') as FormArray
    }

    fulfillUserForm(user: IUser) {
        this.resetUserForm()
        this.fulfillGeneralInformation(user);
        this.fulfillPhoneList(user.phoneList)
        this.fulfillAddressList(user.addressList)
        this.fulfillDependentsList(user.dependentsList)
    }

    private resetUserForm() {
        this.userForm.reset();
        this.generalInformation.reset();
        this.phoneList.reset();
        this.phoneList.clear();
        this.addressList.reset();
        this.addressList.clear();
        this.dependentsList.reset();
        this.dependentsList.clear();
    }
    
    private fulfillDependentsList(userDependentsList: DependentsList) {
        userDependentsList.forEach((dependent) => {
            this.dependentsList.push(this._fb.group({
                name: [dependent.name, Validators.required],
                age: [dependent.age, Validators.required],
                document: [dependent.document, Validators.required]
            }))
        })
    }
    private fulfillAddressList(userAddressList: AddressList) {

        prepareAddressList(userAddressList, false, (address) => {
            this.addressList.push(this._fb.group({
                type: [address.type],
                typeDescription: [{value: address.typeDescription, disabled: true}],
                street: [address.street],
                complement: [address.complement],
                country: [address.country],
                state: [address.state],
                city: [address.city],
            }, 
            {
                validators: requiredAddressValidator
            }))
        })
    }

    private fulfillPhoneList(userPhoneList: PhoneList) {
        preparePhoneList(userPhoneList, false, (phone) => {
            const phoneValidators = phone.type === PhoneType.EMERGENCY ? [] : [Validators.required]
            this.phoneList.push(this._fb.group({
                type: [phone.type],
                typeDescription: [phone.typeDescription],
                number: [phone.phoneNumber, phoneValidators]
            }))
        })
    }

    private fulfillGeneralInformation(user: IUser) {
        const newUser = {
            ...user,
            birthDate: convertPtBrDateToDateObj(user.birthDate)
        }
        this.generalInformation.patchValue(newUser);
    }

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformation: this._fb.group({
                name: ['', Validators.required],
                email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
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