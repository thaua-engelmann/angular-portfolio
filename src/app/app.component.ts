import { HeaderComponent } from './ui/header/header.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [HeaderComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-portfolio';
}
