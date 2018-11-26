import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})

export class CreateuserComponent implements OnInit {

  userDto: UserDto;

  constructor(private data: DataService) { }

  ngOnInit() {
  }
  
  addUser(id:string, username: string, password: string,
    email:string, accessType:string, accessTypeNo:string){
    this.userDto = {id: id, username:username, password:password, email:email,
      accessType:accessType, accessTypeNo:accessTypeNo};
    this.data.addUser(this.userDto).subscribe(
    );
    window.location.reload();
  }
}

export interface UserDto {
  id:string;
  username: string;
  password: string;
  email: string;
  accessType:string;
  accessTypeNo:string;
}
