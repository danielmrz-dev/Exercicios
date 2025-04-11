import { Component } from "@angular/core";
import { PRODUCT_URL, ProductUrlPipe } from "./product-url.pipe";
import { TestBed } from "@angular/core/testing";

describe('ProductUrlPipe', () => {
    it('should properly build URL', () => {
        const { pipe } = setup('https://test.com');
        expect(pipe.transform(123)).toBe('https://test.com/product/123');
    })

    it('should throw an error if invalid ID is passed', () => {
        const { pipe } = setup('https://test.com');
        expect(() => {
            pipe.transform(0)
        }).toThrowError(/Invalid product/);
    })

    it('should throw an error if baseURL is not provided', () => {
        const { pipe } = setup('');
        expect(() => {
            pipe.transform(123);
        }).toThrowError(/was not provided/);
    })
})

function setup(testUrl = '') {
    TestBed.configureTestingModule({
        providers: [
            ProductUrlPipe,
            {
                provide: PRODUCT_URL,
                useValue: testUrl
            }
        ]
    })

    const pipe = TestBed.inject(ProductUrlPipe);
    const testProductUrl = TestBed.inject(PRODUCT_URL);

    return { pipe, testProductUrl };
}