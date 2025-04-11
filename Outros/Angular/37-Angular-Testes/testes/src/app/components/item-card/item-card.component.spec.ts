import { TestBed } from "@angular/core/testing"
import { ItemCardComponent } from "./item-card.component"
import { ButtonComponent } from "../button/button.component";
import { ChipComponent } from "../chip/chip.component";
import { By } from "@angular/platform-browser";
import { Component, Input } from "@angular/core";

describe('Item Card', () => {

    it('should test...', () => {
        const { fixture } = setup();
        fixture.debugElement.query(By.directive(ButtonComponent));

    })
})

function setup() {

    @Component({
        selector: 'df-chip',

    })
    class ChipComponentStub implements Partial<ChipComponent<unknown>> {
        @Input() value: unknown;
    }

    TestBed.configureTestingModule({
        declarations: [ItemCardComponent, ChipComponentStub],
        imports: [ButtonComponent, ChipComponent]
    })

    const fixture = TestBed.createComponent(ItemCardComponent);
    fixture.componentInstance.item = {
        id: 0,
        name: 'Angular Forms',
        imageURL: '',
        price: 99
    }

    fixture.componentInstance.tags = ['Angular Testing'];
    fixture.detectChanges();

    return { fixture };
}