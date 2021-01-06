import { Component, OnInit } from '@angular/core';

import { HttpResponse, HttpEventType, HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UploadFileService } from '../service/upload-file.service';

@Component({
  selector: 'app-pdfupload',
  templateUrl: './pdfupload.component.html',
  styleUrls: ['./pdfupload.component.css']
})


export class PdfuploadComponent implements OnInit {

  uploadedFiles!: Array<File>;
  // Inject service  
  constructor(private http: HttpClient) { } 

  ngOnInit(): void { 
  } 

 
   fileChange(element:any) {
        this.uploadedFiles = element.target.files;
    }
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('http://localhost:8080/api/upload', formData)
    .subscribe((response) => {
         console.log('response received is ', response);
    })
}
}