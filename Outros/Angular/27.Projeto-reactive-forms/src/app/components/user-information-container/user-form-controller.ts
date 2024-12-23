import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces/user/user.interface";
import { PhoneList } from "../../types/phone-list";
import { AddressList } from "../../types/address-list";
import { DependentsList } from "../../types/dependent-list";
import { convertPtBrDateToDateObj } from "../../utils/convert-pt-br-date-to-date-obj";
import { preparePhoneList } from "../../utils/prepare-phone-list";
import { PhoneType } from "../../enums/phone-type.enum";
import { prepareAddressList } from "../../utils/prepare-address-list";
import { requiredAddressValidator } from "../../utils/user-form-validators/required-address-validator";
import { IDependent } from "../../interfaces/user/dependent.interface";
import { UserFormRawValueService } from "../../services/user-form-raw-value.service";

export class UserFormController {

    userForm!: FormGroup
    private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    private readonly _fb = inject(FormBuilder)
    private readonly _userFormRawValueService = inject(UserFormRawValueService);
    constructor() {
        this.createUserForm();
        this.watchUserFormValueChangesAndUpdateService();
    }
    get generalInformation(): FormGroup {
        return this.userForm.get('generalInformation') as FormGroup
    }

    get contactInformation(): FormGroup {
        return this.userForm.get('contactInformation') as FormGroup
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
        this.userForm.markAllAsTouched();
        this.userForm.updateValueAndValidity();
    }

    removeDependent(dependentIndex: number) {
        this.dependentsList.removeAt(dependentIndex);
        this.dependentsList.markAsDirty();
    }

    addDependent() {
        this.dependentsList.push(this.createDependentGroup());
        this.dependentsList.markAsDirty();
    }

    private createDependentGroup(dependent: IDependent | null = null) {
        if (!dependent) {
            return this._fb.group({
                name: ['', Validators.required],
                age: ['', Validators.required],
                document: ['', Validators.required]
            })
        }

        return this._fb.group({
            name: [dependent.name, Validators.required],
            age: [dependent.age.toString(), Validators.required],
            document: [dependent.document.toString(), Validators.required]
        })
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
            this.dependentsList.push(this.createDependentGroup(dependent))
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

    private watchUserFormValueChangesAndUpdateService() {
        this.userForm.valueChanges.subscribe(() => 
            this._userFormRawValueService.userFormRawValue = this.userForm.getRawValue()
        );
    }

}