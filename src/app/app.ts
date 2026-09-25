import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Member } from './member/member';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Member],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'LAB';
}
