import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <svg viewBox="0 0 1000 1000" [style.fontSize]="size + 'px'">
      <path
        fill="currentColor"
        d="M500,10.1c-270.5,0-490,219.4-490,489.8c0,270.5,219.5,490,490,490c270.5,0,490-219.5,490-490C990,229.4,770.5,10.1,500,10.1z M500,353.3c81,0,146.8,65.6,146.8,146.6c0,81-65.8,146.8-146.8,146.8c-81,0-146.8-65.8-146.8-146.8C353.2,418.9,419,353.3,500,353.3z M84.7,531.4H290c15.2,102.3,103.5,180.7,210,180.7s194.8-78.4,210-180.7h205.3c-16.2,215.2-196,385.1-415.3,385.1C280.7,916.5,100.8,746.7,84.7,531.4z"/>
    </svg>
  `,
  styles: [`
    svg {
      width: 1em;
      height: 1em;
      animation: rotate 1.5s infinite;
      color: var(--bs-red);
    }
    @keyframes rotate {
      from { transform: rotate(0) }
      to { transform: rotate(360deg) }
    }
  `]
})
export class LoaderComponent {
  @Input() size: number = 48
  constructor() { }
}
