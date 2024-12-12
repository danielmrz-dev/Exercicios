import { AddressType } from '../enums/address-type.enum';

export const addressTypeDescriptionMap: { [key in AddressType]: string } = {
    [AddressType.RESIDENTIAL]: 'Residencial',
    [AddressType.WORK]: 'Comercial',
    [AddressType.ALTERNATIVE]: 'Alternativo',
};
