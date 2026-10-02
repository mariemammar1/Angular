import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Member } from './member/member';
import { Template } from './template/template';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Member, Template],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'LAB';
}
