
import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
    return opacityTransition();
}

export function opacityTransition() {
    return trigger('routerTransition',
    [
        state('void', style({ position: 'fixed', width: "100%", height: "calc(100% - 100px)", overflowY: "auto" })),
        state('*', style({ position: 'fixed', width: "100%", height: "calc(100% - 100px)", overflowY: "auto" })),
        transition(':enter',
        [
            style({ opacity: '0' }),
            animate('0.3s linear', style({ opacity: '1' }))
        ])
    ]);
}