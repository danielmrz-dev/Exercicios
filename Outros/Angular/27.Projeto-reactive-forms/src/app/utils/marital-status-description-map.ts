import { MaritalStatus } from "../enums/marital-status.enum";

export const maritalStatusDescriptionMap: { [key in MaritalStatus]: string } = {
    [MaritalStatus.SINGLE]: "Solteiro(a)",
    [MaritalStatus.MARRIED]: "Casado(a)",
    [MaritalStatus.DIVORCED]: "Divorciado(a)",
}

export const maritalStatusArray = Object.keys(maritalStatusDescriptionMap).map(Number).map((key) => {
    return {
        code: key,
        description: maritalStatusDescriptionMap[key as MaritalStatus]
    }
})

console.log(maritalStatusArray);
