import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
// http://ec2-3-139-227-180.us-east-2.compute.amazonaws.com:8080/
const AUTH_API = 'http://ec2-3-139-227-180.us-east-2.compute.amazonaws.com:8080/api/auth/';
// const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  father = localStorage.getItem("name")

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      middle_name: user.middle_name,
      phone_no: user.phone_no,
      last_name: user.last_name,
      gender: user.gender,
      city: user.city,
      state: user.state,
      yob: user.yob,
      time_zone: user.time_zone,
      church_name: user.church_name,
      paster_name: user.paster_name,
      church_city: user.church_city,
      church_state: user.church_state,
      created_by: user.created_by,
      modify_by: user.modify_by,

    }, httpOptions);

  }

  // getcountry(user: any): Observable<any> {

  //     return this.http.post(AUTH_API + 'getcountry', {
  //       username: user.username,
  //       password: user.password
  //     }, httpOptions);
  //   }

  getcountry(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'getcountry', {
      // schedule_date: user.schedule_date,
    }, httpOptions)
  }
  getstate(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'getstate', {
      country_id: user.country_id,
    }, httpOptions)
  }
  getcity(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'getcity', {
      state_id: user.state_id,
    }, httpOptions)
  }
  SaveWorkareaNotes(worknotes: any): Observable<any> {
    console.log(worknotes);
    console.log(worknotes.Date_Time);
    return this.http.post(AUTH_API + 'workareanote', {
      Notes: worknotes.Notes,
      UserName: worknotes.UserName,
      Date_Time: worknotes.Date_Time,
      father_id: worknotes.father_id


    }, httpOptions);

  }
  getworkareanotes(): Observable<any> {
    return this.http.post(AUTH_API + 'getworkareanote', {
    }, httpOptions)
  }
  schedule(schedule: any): Observable<any> {
    return this.http.post(AUTH_API + 'schedule', {
      schedule_date: schedule.schedule_date,
      father_id: schedule.father_id,
      comments: schedule.comments,
      schedule_time: schedule.schedule_time,
      schedule_name: schedule.schedule_name,
      schedule_email: schedule.schedule_email

    }, httpOptions);
  }

  search(schedule: any): Observable<any> {
    return this.http.post(AUTH_API + 'schedulesearch', {
      schedule_date: schedule.schedule_date,
    }, httpOptions)
  }

  fetchBibleData(param: any, book: string): Observable<any> {
    return this.http.post(AUTH_API + 'fetchBibleData', {
      query: param,
      bible: book
    }, httpOptions);
  }

  fetchStrongData(strong: any, bible: any): Observable<any> {
    console.log(strong + " " + bible);
    return this.http.post(AUTH_API + 'fetchStrongData', {
      strong: strong,
      bible: bible
    }, httpOptions);
  }

  fetchCroessData(version: any, value: any, reference: any) {
    console.log(version + "  " + value + "  " + reference);
    return this.http.post(AUTH_API + 'fetchCroessData', {
      reference: reference,
      version: version,
      value: value
    }, httpOptions);
  }
  deleteWorkAreaNote(id: any): Observable<any> {
    console.log(id)
    console.log(`${AUTH_API + 'deteteworkareanotes'}/${id}`)
    return this.http.delete(`${AUTH_API + 'deteteworkareanotes'}/${id}`);
  }
  updateWorkAreaNote(id: any, data: any): Observable<any> {
    return this.http.put(`${AUTH_API + 'updateworkareanote'}/${id}`, data);
  }
  getBible(version: any, book: any, chapter: any) {
   const body = {
      type: version,
      book: book,
      chapter: chapter
    }
    return this.http.post(AUTH_API + 'GetAllBible',body , httpOptions)
  }
  getStrong(verse:any) {
    const body = {
      verse: verse,
     }
     return this.http.post(AUTH_API + 'GetAllStrong',body , httpOptions)
   }
}

