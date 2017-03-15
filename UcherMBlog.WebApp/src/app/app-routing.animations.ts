
import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
    return slideToLeft();
}

function slideToLeft() {
    return trigger('routerTransition',
    [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter',
        [
            style({ opacity: '0' }),
            animate('0.2s linear', style({ opacity: '1' }))
        ])
    ]);
}