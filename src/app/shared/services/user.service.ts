import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import * as moment from 'moment';
import { User } from '../models/user';

@Injectable()
export class UserService {
  selectedUser: User = new User();
  users: AngularFireList<User>;
  user: AngularFireObject<User>;
  constructor(private db: AngularFireDatabase) {
    this.getUsers();
  }

  getUserById(key: string) {
    this.user = this.db.object('clients/' + key);
    return this.user;
  }

  getUsers() {
    this.users = this.db.list('clients');
    return this.users;
  }

  createUser(data: User) {
    data.createdOn = moment(new Date()).format('X');
    data.isAdmin = false;
    this.users.push(data);
  }
  isAdmin(emailId: string) {
    return this.db.list('clients', ref =>
      ref.orderByChild('email').equalTo(emailId)
    );
  }
}
