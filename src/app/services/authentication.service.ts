import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private users=[
    {username:'admin',password:'1234',roles:['ADMIN','USER']},
    {username:'user1',password:'1234',roles:['USER']},
    {username:'user2',password:'1234',roles:['USER']}
  ];

  public isAuthenticated:boolean;
  public userAuthenticated;

  constructor() { }

    public login(username:string, password:string){
    let user;
    this.users.forEach(u=> {
      if (u.username == username && u.password == password) {
        user = u;
      }
    });
      if(user){
        this.isAuthenticated=true;
        this.userAuthenticated=user;
      }
      else{
        this.isAuthenticated=false;
        this.userAuthenticated=undefined;
      }
    }

     isAdmin(){
    if(this.userAuthenticated) {
      if (this.userAuthenticated.roles.indexOf('ADMIN') > -1)
        return true;
    }
      return false;
    }




}
