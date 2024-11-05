import { Pipe, PipeTransform } from "@angular/core";
import { operations } from "../data/data";

@Pipe({
    name: "filterUsers"
})
export class FilterUsersPipe implements PipeTransform {
    transform(list: any, searchProp: string, searchValue: string): any[] {
        if (list.length === 0 || !searchValue) {
            return list
        }

        return list.filter((item: any) => item[searchProp].toLowerCase().includes(searchValue.toLowerCase()))
    }
}