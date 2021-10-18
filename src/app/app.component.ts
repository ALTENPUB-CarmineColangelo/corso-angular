import { Component } from '@angular/core';
import config from '../../package-lock.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corso Angular';
  courseVersion = config.version;
  ngVersion = config.dependencies['@angular/core'].version;
}
