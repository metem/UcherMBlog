
import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
    return opacityTransition();
}

function opacityTransition() {
    return trigger('routerTransition',
    [
        state('void', style({ position: 'fixed', width: "100%", height: "100%" })),
        state('*', style({ position: 'fixed', width: "100%", height: "100%" })),
        transition(':enter',
        [
            style({ opacity: '0' }),
            animate('0.3s linear', style({ opacity: '1' }))
        ])
    ]);
}