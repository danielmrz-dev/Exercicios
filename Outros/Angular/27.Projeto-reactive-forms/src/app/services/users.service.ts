import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaritalStatus } from '../enums/marital-status.enum';
import { PhoneType } from '../enums/phone-type.enum';
import { AddressType } from '../enums/address-type.enum';
import { UsersListResponse } from '../types/users-list-response';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private readonly usersList: UsersListResponse = [
        {
            name: 'Fulano',
            email: 'fulano@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatus.SINGLE,
            monthlyIncome: 5000,
            birthDate: '25/02/1991',
            phoneList: [
                {
                    type: PhoneType.RESIDENTIAL,
                    areaCode: '11',
                    internationalCode: '+55',
                    number: '1234-5678',
                },
                {
                    type: PhoneType.MOBILE,
                    areaCode: '11',
                    internationalCode: '+55',
                    number: '91111-2222',
                },
                {
                    type: PhoneType.EMERGENCY,
                    areaCode: '11',
                    internationalCode: '+55',
                    number: '93333-4444',
                },
            ],
            addressList: [
                {
                    type: AddressType.RESIDENTIAL,
                    street: 'Rua de Tal',
                    complement: 'Próximo ao parque',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Ribeirão Preto',
                },
                {
                    type: AddressType.WORK,
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
                {
                    type: AddressType.ALTERNATIVE,
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 12,
                    document: 22011944867,
                },
                {
                    name: 'Fulaninha',
                    age: 9,
                    document: 99988877766,
                },
            ],
        },
        {
            name: 'Laura',
            email: 'laura@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatus.MARRIED,
            monthlyIncome: 6000,
            birthDate: '12/12/1994',
            phoneList: [
                {
                    type: PhoneType.EMERGENCY,
                    areaCode: '11',
                    internationalCode: '+55',
                    number: '93333-7777',
                },
            ],
            addressList: [
                {
                    type: AddressType.WORK,
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 5,
                    document: 22011944800,
                },
            ],
        },
        {
            name: 'Marcos',
            email: 'marcos@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatus.DIVORCED,
            monthlyIncome: 7000,
            birthDate: '11/11/1991',
            phoneList: [
                {
                    type: PhoneType.MOBILE,
                    areaCode: '11',
                    internationalCode: '+55',
                    number: '91111-7777',
                },
            ],
            addressList: [
                {
                    type: AddressType.ALTERNATIVE,
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [],
        },
    ];

    getUsers(): Observable<UsersListResponse> {
        return new Observable<UsersListResponse>((observer) => {
            setTimeout(() => {
                observer.next(this.usersList);
            }, 500);
        });
    }
}
