export class User {
  $key: string;
  uid: string;
  userId: string;
  userName: string;
  emailId: string;
  password: string;
  phoneNumber: string;
  address: string;
  createdOn: string;
  isAdmin: boolean;
  avatar: string;
  constructor(userId?: string, userName?: string, phoneNumber?: string) {
    this.userId = userId;
    this.userName = userName;
    this.phoneNumber = phoneNumber;
  }
}
export class UserDetail {
  $key: string;
  firstName: string;
  lastName: string;
  userName: string;
  emailId: string;
  address1: string;
  address2: string;
  ville: string;

}

