import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatIconModule,
  ],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  isMobile = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe('(max-width: 760px)')
      .pipe(takeUntilDestroyed())
      .subscribe(({ matches }) => {
        this.isMobile = matches;
      });
  }

  closeDrawer(drawer: MatSidenav): void {
    if (this.isMobile) {
      drawer.close();
    }
  }
}
