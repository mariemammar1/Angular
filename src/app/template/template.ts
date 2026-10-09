import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../service/auth-service';

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
  @ViewChild('drawer') drawer?: MatSidenav;

  isMobile = false;
  isLoginPage = false;
  userEmail = 'Lab Admin';
  userInitial = 'L';

  constructor(
    breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) {
    this.checkIfLogin(this.router.url);

    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        this.checkIfLogin(event.urlAfterRedirects || event.url);
      });

    breakpointObserver
      .observe('(max-width: 760px)')
      .pipe(takeUntilDestroyed())
      .subscribe(({ matches }) => {
        this.isMobile = matches;
      });

    this.authService
      .getUser()
      .pipe(takeUntilDestroyed())
      .subscribe((user) => {
        if (user?.email) {
          this.userEmail = user.email;
          this.userInitial = user.email.charAt(0).toUpperCase();
        } else {
          this.userEmail = 'Lab Admin';
          this.userInitial = 'L';
        }
      });
  }

  private checkIfLogin(url: string): void {
    const cleanUrl = url.split('?')[0].split('#')[0];
    this.isLoginPage = cleanUrl === '/login' || cleanUrl.endsWith('/login');
  }

  toggleDrawer(): void {
    this.drawer?.toggle();
  }

  closeDrawer(drawer?: MatSidenav): void {
    if (this.isMobile) {
      if (drawer) {
        drawer.close();
      } else {
        this.drawer?.close();
      }
    }
  }

  logout(): void {
    this.authService
      .signOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error('Logout error:', err);
        this.router.navigate(['/login']);
      });
  }
}
