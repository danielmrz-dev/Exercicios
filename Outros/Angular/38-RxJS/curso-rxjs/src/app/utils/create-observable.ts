import { Observable } from "rxjs";

export function createObservable(url: string) {
    return new Observable((observer) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((value) => {
                observer.next(value);
                observer.complete();
            })
            .catch((error) => {
                observer.error(error);
            })
    })
}