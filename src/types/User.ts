export class User {
  constructor() {
    this.id = 0;
    this.permission = 0;
    this.rwPermission = 0;
    this.userName = "unnamed";
    this.password = "";
    this.fName = "";
    this.lName = "";
    this.mName = "";
    this.email = "";
    this.phone = "";
    this.cPhone = "";
    this.address = "";
  }
  id: Number;
  permission: Number;
  rwPermission: Number;
  userName: String;
  password: String;
  fName: String;
  lName: String;
  mName: String;
  email: String;
  phone: String;
  cPhone: String;
  address: String;
}
