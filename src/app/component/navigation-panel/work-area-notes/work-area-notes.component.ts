import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AuthService } from 'src/app/service/auth.service';

import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-work-area-notes',
  templateUrl: './work-area-notes.component.html',
  styleUrls: ['./work-area-notes.component.css']
})
export class WorkAreaNotesComponent implements OnInit {
 
  father_id: any;
  isworkareanotes = true;
  registerForm: any;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  @Output() wrokareathis = new EventEmitter();
  timeNow: Date = new Date();
  today = new Date();
  todaysDataTime: any;
  min_date: any;
  worklist: any;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private dom : DomSanitizer) {
    setInterval(() => {
      this.timeNow = new Date();
      this.todaysDataTime = formatDate(this.today, 'dd/MM hh:mm a', 'en-US', '+0530');
    }, 100);

  }

  ngOnInit() {
    this.father_id = localStorage.getItem("father_id") || "father_id";
    console.log(this.father_id);
    this.authService.getworkareanotes().subscribe(
      data => {
        this.worklist = data
        console.log(this.form);
        console.log(data)
      },
      err => {
      });

  }
  config: AngularEditorConfig = {

    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',

    toolbarHiddenButtons: [
      ['bold', 'background-color',]

    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],

  };


  get f() { return this.registerForm.controls; }


  onSubmit() {
    
    //  const displayString= this.dom.bypassSecurityTrustHtml(this.form.Notes);
    //  console.log(displayString)

    this.form.father_id = this.father_id;
    this.form.Date_Time = this.todaysDataTime;

    console.log(this.father_id);
    
    this.authService.SaveWorkareaNotes(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  toggleclose() {
    this.wrokareathis.emit(false);
  }
  message: any;

  deleteworknote(id: any): void {
    alert(id);
    this.authService.deleteWorkAreaNote(id)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The work area notes was delete successfully!';
        },
        error => {
          console.log(error);
        });
  }
  updateWorkAreaNotes(): void {
    this.authService.updateWorkAreaNote(this.worklist.id, this.form)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The work area was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
