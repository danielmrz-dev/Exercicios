import { isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined;
    if (NAME_NOT_TYPED) {
        return usersList;
    }
    const filteredList = usersList.filter((user) =>
        user.nome.toLowerCase().includes(name.toLowerCase())
    );
    return filteredList;
};

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_PASSED = status === undefined
    if (STATUS_NOT_PASSED) {
        return usersList;
    }
    const filteredList = usersList.filter((user) => user.ativo === status)
    return filteredList
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if (DATE_NOT_SELECTED) {
        return usersList;
    }
    const checkDateInterval = (user: IUser) => isWithinInterval(user.dataCadastro, { start: startDate, end: endDate })
    const filteredList = usersList.filter(checkDateInterval)
    return filteredList
}

export const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];
    filteredList = filterUsersListByName(filterOptions.name, usersList)
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList)
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)
    return filteredList;
}
