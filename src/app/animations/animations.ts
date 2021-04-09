import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const alertLeft = trigger('translateLeft', [
  transition(
    ':enter',
    animate(
      '0.4s ease-in-out',
      keyframes([
        style({ transform: 'translateX(-400px)' }),
        style({ transform: 'translateX(100px)' }),
        style({ transform: 'translateX(0)' }),
      ])
    )
  ),
  transition(
    ':leave',
    animate(
      '0.4s ease-in-out',
      keyframes([
        style({ transform: 'translateX(0)' }),
        style({ transform: 'translateX(100px)' }),
        style({ transform: 'translateX(-400px)' }),
      ])
    )
  ),
]);

export const slideInAnimation = trigger('routeAnimations', [
  transition('Diff <=> Players', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '300ms ease-out',
          keyframes([
            style({ transform: 'scale(1)', opacity: 1 }),
            style({ transform: 'scale(1.2)' }),
            style({ transform: 'scale(0)', opacity: 0 }),
          ])
        ),
      ]),
      query(':enter', [
        animate(
          '300ms ease-out',
          keyframes([
            style({ transform: 'scale(0)', opacity: 1 }),
            style({ transform: 'scale(1.2)' }),
            style({ transform: 'scale(1)', opacity: 0 }),
          ])
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> Names', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '200ms ease-out',
          keyframes([
            style({ transform: 'scale(1)', opacity: 1 }),
            style({ transform: 'scale(1.2)' }),
            style({ transform: 'scale(0)', opacity: 0 }),
          ])
        ),
      ]),
      query(':enter', [
        animate(
          '300ms ease-out',
          keyframes([
            style({ transform: 'scale(0)', opacity: 1 }),
            style({ transform: 'scale(1.2)' }),
            style({ transform: 'scale(1)', opacity: 0 }),
          ])
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);

export const popAnim = trigger('popIn', [
  transition(
    ':enter',
    animate(
      '0.4s ease-in-out',
      keyframes([
        style({ transform: 'scale(0)', opacity: 0 }),
        style({ transform: 'scale(1.2)' }),
        style({ transform: 'scale(1)', opacity: 1 }),
      ])
    )
  ),
  transition(
    ':leave',
    animate(
      '0.4s ease-in-out',
      keyframes([
        style({ transform: 'scale(1)', opacity: 1 }),
        style({ transform: 'scale(1.2)' }),
        style({ transform: 'scale(0)', opacity: 0 }),
      ])
    )
  ),
]);

export const routeMain = trigger('routeMain', [
  transition('Setup => Game', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('Game => Setup', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);

export const opacityAnim = trigger('opacityAnim', [
  transition(
    ':enter',
    animate(
      '0.5s ease-in-out',
      keyframes([style({ opacity: 0 }), style({ opacity: 1 })])
    )
  ),
  transition(
    ':leave',
    animate(
      '0.5s ease-in-out',
      keyframes([style({ opacity: 1 }), style({ opacity: 0 })])
    )
  ),
]);
