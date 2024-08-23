import { Component } from '@angular/core';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
