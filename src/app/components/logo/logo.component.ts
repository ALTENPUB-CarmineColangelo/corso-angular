import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="logo d-inline-block position-relative">
      <i class="bi-circle-half text-danger position-absolute top-50 start-50 translate-middle "></i>
      <div class="logo_dot position-absolute top-50 start-50 translate-middle bg-white rounded-circle"></div>
    </div>
  `,
  styles: [`
    app-logo {
      display: block;
    }
    .logo {
      font-size: 24px;
      width: calc(36/24 * 1em);
      height: calc(24/36 * 1em);
      transform: rotate(90deg);
    }
    .logo_dot {
      width: .4em;
      height: .4em;
      border: .075em solid var(--bs-danger)
    }
  `]
})
export class LogoComponent{

  constructor() { }
}
