import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    RouterLink,
    RouterOutlet,
    MatIconModule,
  ],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {}
