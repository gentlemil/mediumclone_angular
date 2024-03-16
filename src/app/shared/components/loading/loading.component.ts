import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loading-message',
  template: '<div>Loading...</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
