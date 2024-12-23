export interface IUserForm {
    generalInformation: IUserFormGeneralInformation;
    contactInformation: IUserFormContactInformation;
    dependentsInformation: IUserFormDependent[];
}

export interface IUserFormGeneralInformation {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: Date;
}

export interface IUserFormContactInformation {
    phoneList: IUserFormPhone[];
    addressList: IUserFormAddress[];
}

export interface IUserFormPhone {
    type: number;
    typeDescription: string;
    number: string;
}

export interface IUserFormAddress {
    type: number;
    typeDescription: string;
    street: string;
    complement: string;
    country: string;
    state: string;
    city: string;
}

export interface IUserFormDependent {
    name: string;
    age: string;
    document: string;
}
