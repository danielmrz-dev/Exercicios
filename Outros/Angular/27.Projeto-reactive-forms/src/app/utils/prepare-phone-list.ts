import { PhoneType } from "../enums/phone-type.enum";
import { IPhone } from "../interfaces/user/phone.interface";
import { PhoneList } from "../types/phone-list";
import { phoneTypeDescriptionMap } from "./phone-type-description-map";

export const preparePhoneList = (originalUserPhoneList: PhoneList, callback: (phone: { type: number; typeDescription: string; phoneNumber: string; }) => void) => {
    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
        const phoneFound = originalUserPhoneList.find((userPhone: IPhone) => userPhone.type === phoneType)

        callback({
            type: phoneType,
            typeDescription: phoneTypeDescriptionMap[phoneType as PhoneType],
            phoneNumber: phoneFound ? formatPhoneNumber(phoneFound) : '-'
        });
    })
};

const formatPhoneNumber = (phoneNumber: IPhone) => {
    return `${phoneNumber.internationalCode} (${phoneNumber.areaCode}) ${phoneNumber.number}`
}