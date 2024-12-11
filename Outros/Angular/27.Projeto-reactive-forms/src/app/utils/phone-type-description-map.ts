import { PhoneType } from "../enums/phone-type.enum";

export const phoneTypeDescriptionMap: { [key in PhoneType]: string } = {
    [PhoneType.RESIDENTIAL]: "Residencial",
    [PhoneType.MOBILE]: "Celular",
    [PhoneType.EMERGENCY]: "Emergência"
}