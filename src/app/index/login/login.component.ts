import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastyService, ToastOptions, ToastyConfig } from 'ng2-toasty';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
declare var $: any;
declare var require: any;
const shortId = require('shortid');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    emailId: '',
    loginPassword: ''
  };
 Id: any;
  errorInUserCreate = false;
  errorMessage: any;
  createUser;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastyService: ToastyService,
    private router: Router,
    private route: ActivatedRoute,
    private toastyConfig: ToastyConfig,
    private firebaseAuth: AngularFireAuth,
  ) {
    this.toastyConfig.position = 'top-right';
    this.toastyConfig.theme = 'material';

    this.createUser = new User();
  }

  ngOnInit() {

  }

  addUser(userForm: NgForm) {
    userForm.value['isAdmin'] = false;

     this.Id = shortId.generate();
     this.createUser.userId = this.Id;
     this.createUser.userName = userForm.value['userName'];
     this.authService
      .createUserWithEmailAndPassword(
        userForm.value['emailId'],
        userForm.value['password']
      )
        .then((res) => {
          this.createUser = {
            email: res.user.email,
            Name: userForm.value['userName'],
            uid: res.user.uid,
            verified_email: res.user.emailVerified,
            phoneNumber: userForm.value['phoneNumber'],
            picture: null
          };
          this.userService.createUser(this.createUser);
        const toastOption: ToastOptions = {
          title: 'User Registeration',
          msg: 'Registering',
          showClose: true,
          timeout: 3000,
          theme: 'material'
        };
        this.toastyService.wait(toastOption);
        setTimeout((router: Router) => {
          $('#createUserForm').modal('hide');
          this.router.navigate(['/']);
        }, 1500);
      })
      .catch(err => {
        this.errorInUserCreate = true;
        this.errorMessage = err;
        const toastOption: ToastOptions = {
          title: 'Error while Creating User',
          msg: err,
          showClose: true,
          timeout: 5000,
          theme: 'material'
        };
        this.toastyService.error(toastOption);
      });
  }

  signInWithEmail(userForm: NgForm) {
    this.authService
      .signInRegular(userForm.value['emailId'], userForm.value['loginPassword'])
      .then(res => {
        const toastOption: ToastOptions = {
          title: 'Authentication Success',
          msg: 'Logging in please wait',
          showClose: true,
          timeout: 5000,
          theme: 'material'
        };
        this.toastyService.wait(toastOption);
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

        setTimeout((router: Router) => {
          this.router.navigate([returnUrl || '/']);
        }, 1500);

        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('logging Error: ', err);
        const toastOption: ToastOptions = {
          title: 'Authentication Failed',
          msg: 'Invalid Credentials, Please Check your credentials',
          showClose: true,
          timeout: 5000,
          theme: 'material'
        };
        this.toastyService.error(toastOption);
      });
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then(res => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        location.reload();
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
        const toastOption: ToastOptions = {
          title: 'Error Occured',
          msg: 'Please try again later',
          showClose: true,
          timeout: 5000,
          theme: 'material'
        };
        this.toastyService.error(toastOption);
      });
  }
}
