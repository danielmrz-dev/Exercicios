import { Component } from "@angular/core"
import { ChipComponent } from "./chip.component"
import { TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"

describe('Chip Component', () => {
    beforeEach(() => {})

    it('should project content', () => {
        const { chipDebugElement } = setup();
        const chipTextEl = chipDebugElement.query(By.css('[data-testId="chip"]')).nativeElement
        expect(chipTextEl.innerText).toBe("Angular");
    })

    it("should emit event if the remove icon is clicked", () => {
        let expectedValue: any;
        const fixture = TestBed.createComponent(ChipComponent);
        fixture.componentInstance.removed.subscribe(
            chip => expectedValue = chip
        )
        fixture.componentRef.setInput('removable', true);
        fixture.detectChanges();
        const removeIcon = fixture.debugElement.query(By.css('[data-testId="remove"]'));
        removeIcon.triggerEventHandler('click');
        expect(expectedValue).toBe(fixture.componentInstance);
    })

    it('should emit event if the remove icon is clicked (TestHost)', () => {
        const { fixture, chipDebugElement } = setup();
        fixture.componentInstance.removable = true;
        fixture.detectChanges();

        const removeIconEl = chipDebugElement.query(By.css('[data-testId="remove"]'))
        removeIconEl.triggerEventHandler('click');
        expect(fixture.componentInstance.removedItem).toBe(chipDebugElement.componentInstance);
    })
})

function setup() {
    @Component({
        template: `
            <df-chip 
                (removed)="removedItem = $event" 
                [removable]="removable">
                    Angular
            </df-chip>`,
        standalone: true,
        imports: [ChipComponent]
    })
    class ChipTestHost {
        removedItem!: ChipComponent<unknown>;
        removable = false;
    }

    let fixture = TestBed.createComponent(ChipTestHost);
    let chipDebugElement = fixture.debugElement.query(By.directive(ChipComponent));
    fixture.detectChanges();

    return { fixture, chipDebugElement }


}