import { PhoneType } from "../enums/phone-type.enum";
import { IPhoneToDisplay } from "../interfaces/phone-to-display.interface";
import { IPhone } from "../interfaces/user/phone.interface";
import { PhoneList } from "../types/phone-list";
import { phoneTypeDescriptionMap } from "./phone-type-description-map";

export const preparePhoneList = (originalUserPhoneList: PhoneList, isDisplayPhone: boolean, callback: (phone: IPhoneToDisplay) => void) => {
    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
        const phoneFound = originalUserPhoneList.find((userPhone: IPhone) => userPhone.type === phoneType)

        let phoneNumber = ''

        if (isDisplayPhone) {
            phoneNumber = phoneFound ? formatPhoneNumberToDisplay(phoneFound) : '-'
        } else {
            phoneNumber = phoneFound ? formatPhoneNumberToEdit(phoneFound) : ''
        }
        callback({
            type: phoneType,
            typeDescription: phoneTypeDescriptionMap[phoneType as PhoneType],
            phoneNumber,
        });            

    })
};

const formatPhoneNumberToEdit = (phoneNumber: IPhone) => {
    return `${phoneNumber.internationalCode}${phoneNumber.areaCode}${phoneNumber.number}`.replace(/[+\-]/g, '');
}

const formatPhoneNumberToDisplay = (phoneNumber: IPhone) => {
    return `${phoneNumber.internationalCode} ${phoneNumber.areaCode} ${phoneNumber.number}`
}