import { isNumber, toBooleanProperty } from "./type-coercion";

describe('Teste que verifica se o dado passado é do tipo Number', () => {

    it('should treat the integer 100 as a number', () => {
        expect(isNumber(100)).toBe(true);
    })

    it('should treat the string 100 as a number', () => {
        expect(isNumber('100')).toBe(true);
    })

    it('should not treat the string "" as a number', () => {
        expect(isNumber('')).toBe(false);
    })

    it('should not treat the string "100abc" as a number', () => {
        expect(isNumber('100abc')).toBe(false);
    })

    it('should not treat the object "{}" as a number', () => {
        expect(isNumber({})).toBe(false);
    })

    it('should not treat the array "[]" as a number', () => {
        expect(isNumber([])).toBe(false);
    })

})

describe('Teste que transforma um valor passado para o tipo boolean', () => {
    it('Deve transformar a string "false" em boolean false', () => {
        expect(toBooleanProperty('false')).toBe(false)
    })

    it('Deve transformar a string "" em boolean true', () => {
        expect(toBooleanProperty('')).toBe(true)
    })

    it('Deve transformar null em boolean false', () => {
        expect(toBooleanProperty(null)).toBe(false)
    })
})