import { IUserForm, IUserFormGeneralInformation } from "../interfaces/user-form.interface";
import { IUser } from "../interfaces/user/user.interface";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = {...convertGeneralInformation(userForm.generalInformation)}

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
        birthDate: '',
    }
}