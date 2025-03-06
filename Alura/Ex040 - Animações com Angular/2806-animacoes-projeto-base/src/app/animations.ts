import { trigger, state, style, transition, animate } from "@angular/animations";

export const highlightedStateTrigger = trigger("highlightedState", [
    state('default', style({})),
    state('highlighted', style({
        borderColor: '#b2b6ff',
        filter: 'brightness(92%)'
    })),
    transition('* => *', [
        animate(300),
    ])
])

export const shownStateTrigger = trigger("shownState", [
    transition(':enter', [
        style({
            opacity: 0,
        }),
        animate(200, style({
            opacity: 1
        }))
    ]),
    transition(':leave', [
        animate(200, style({
            opacity: 0
        }))
    ])
])

export const checkButtonTrigger = trigger('checkButton', [
    transition('* => checked', [
        animate('400ms ease-in', style({
            transform: 'scale(0.4)'
        }))
    ])
])