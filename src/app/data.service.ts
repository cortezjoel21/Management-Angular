import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from './createuser/createuser.component';

@Injectable({
  providedIn: 'root'
})  
export class DataService {


  constructor(private http: HttpClient) { }

  getUsers(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');  
    return this.http.get('http://localhost:8080/dashboard/getUsers')
  }
  getUser(userId){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');  
    return this.http.get('http://localhost:8080/dashboard/getUser/'+userId,  {headers:headers})
  }
  addUser(userDto: UserDto): Observable<Object>{  
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');  
    return this.http.post('http://localhost:8080/dashboard/addUser', userDto, {headers:headers})
  }
  updateUser(userDto: UserDto){
    console.log("accessType user component: " + userDto.accessType);
    console.log("accessType user component: " + userDto.accessTypeNo);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');  
    return this.http.post('http://localhost:8080/dashboard/updateUser', userDto, {headers:headers})
  }
}