import { UserService } from './../../shared/services/user.service';
import {
  Component,
  OnInit,
} from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { RepasService } from 'src/app/shared/services/repas.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    public userService: UserService,
    public repasService: RepasService,

  ) {
  }

  ngOnInit() {
  }
  logout() {
    this.repasService.removestorage();
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
