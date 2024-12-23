import { IUserForm, IUserFormAddress, IUserFormDependent, IUserFormGeneralInformation, IUserFormPhone } from "../interfaces/user-form.interface";
import { IUser } from "../interfaces/user/user.interface";
import { AddressList } from "../types/address-list";
import { DependentsList } from "../types/dependent-list";
import { PhoneList } from "../types/phone-list";
import { convertDateObjToPtBrDate } from "./convert-date-obj-to-ptbr-date";
import { formatNumber } from "./format-number";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = {...convertGeneralInformation(userForm.generalInformation)}
    newUser.phoneList = [...convertPhoneList(userForm.contactInformation.phoneList)]
    newUser.addressList = [...convertAddressList(userForm.contactInformation.addressList)]
    newUser.dependentsList = [...convertDependentsList(userForm.dependentsInformation)]

    return newUser as IUser;
}

const convertGeneralInformation = (generalInformation: IUserFormGeneralInformation): Partial<IUser> => {
    return {
        name: generalInformation.name,
        email: generalInformation.email,
        country: generalInformation.country,
        state: generalInformation.state,
        maritalStatus: generalInformation.maritalStatus,
        monthlyIncome: generalInformation.monthlyIncome,
        birthDate: convertDateObjToPtBrDate(generalInformation.birthDate),
    }
}

const convertPhoneList = (phoneList: IUserFormPhone[]): PhoneList => {
    const newUserPhoneList: PhoneList = phoneList.map((phone) => ({ 
        type: phone.type,
        internationalCode: '+' + phone.number.substring(0, 2),
        areaCode: phone.number.substring(2, 4),
        number: formatNumber(phone.number.substring(4)),
    })).filter((phone) => phone.areaCode !== '')

    return newUserPhoneList;
}

const convertAddressList = (addressList: IUserFormAddress[]): AddressList => {
    const newUserAddressList: AddressList = addressList.map((address) => ({ 
        type: address.type,
        street: address.street,
        complement: address.complement,
        country: address.country,
        state: address.state,
        city: address.city,
    })).filter((address) => address.street !== '')

    return newUserAddressList;
}

const convertDependentsList = (dependentsList: IUserFormDependent[]): DependentsList => {
    const newUserDependentsList: DependentsList = dependentsList.map((dependent) => ({
        name: dependent.name,
        age: +dependent.age,
        document: +dependent.document,
    }))

    return newUserDependentsList;
}