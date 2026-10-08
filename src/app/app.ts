import { Component } from '@angular/core';
import { Template } from './template/template';

@Component({
  selector: 'app-root',
  imports: [Template],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'LAB';
}
