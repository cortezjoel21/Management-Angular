import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute} from '@angular/router';
import { UserDto } from '../createuser/createuser.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: Object;
  userVal: UserDto;
  userDto: UserDto;

  constructor(private data:DataService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.user = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user).subscribe(
      data => this.user = data
    )
  }

  updateUser(id:string, username: string,
    email:string, accessType:string, accessTypeNo:string){

    console.log("accessType: " + accessType);
      
    this.userDto = {id: id, username:username, password:'', email:email,
      accessType:accessType, accessTypeNo:accessTypeNo};
    this.data.updateUser(this.userDto).subscribe(
    );
    window.location.reload();
  }
} 
export class AppComponent {}