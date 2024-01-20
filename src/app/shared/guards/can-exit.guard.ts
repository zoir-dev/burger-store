import { CanDeactivateFn } from '@angular/router';

export interface IDirective {
  canExit(): boolean
}
export const canExitGuard: CanDeactivateFn<IDirective> = (component: IDirective, currentRoute, currentState, nextState) => {
  return component.canExit();
};
