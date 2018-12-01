import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs-compat/Observable';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  loggedUser: User;
  // Enable Update Button
  user: firebase.User = null;
  constructor(private authService: AuthService, private firebaseAuth: AngularFireAuth, private userService: UserService) {}

  ngOnInit() {
    this.loggedUser = this.authService.getLoggedInUser();
    this.user = this.firebaseAuth.auth.currentUser;
    console.log(this.user.uid);
    console.log(this.loggedUser.userName);


  }


}
