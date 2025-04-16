
export function isNumber(value: any) {
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

export function toBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
}

export function toNumberProperty(value: any): number {
    return isNumber(value) ? Number(value) : 0;
}