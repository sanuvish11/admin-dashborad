import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-cross-reference',
  templateUrl: './cross-reference.component.html',
  styleUrls: ['./cross-reference.component.css']
})
export class CrossReferenceComponent implements OnInit {


  iscorss = true;
  @Output() thiscrosscom = new EventEmitter();

  constructor(private apiService: AuthService) { }
  strong: any;
  version: any;
  reference: any;
  strongsList: any;
  versesList: any;
  searchResults: any;
  preResult: any;
  optResults = new Array();
  StrongDataList: any;
  listversre?: String;
  listStrong?: String;
  CrossDataList: any;
  value: any;
  ngOnInit() {
    this.strong = JSON.parse(localStorage.getItem("strong") || "");
    this.version = localStorage.getItem("version");
    this.value =  this.strong.value; //localStorage.getItem("value")
    this.reference = this.strong.verse;//localStorage.getItem("reference");
   
    console.log( this.version + "  " + this.value + "  " + this.reference);
    this.apiService.fetchCroessData( this.version,this.value,this.reference ).subscribe((data) => {
      console.log(data);
      this.CrossDataList = data;
      console.log(this.CrossDataList)
      this.strongsList = this.CrossDataList.strongs;
      this.versesList = this.CrossDataList.verses;
      console.log(this.strongsList)
      let i = 0;
      this.optResults = [];
      this.strongsList.forEach((response: any) => {
        let data: Result = ({ "key": response || "", "preview": this.extractContent(response, this.versesList[i]) || "" });
        this.optResults.push(data);
        i++;
      });

      this.versesList.forEach((response: any) => {
        let jd: any = JSON.stringify(response);
        this.listversre = jd;
      });

      console.log(this.optResults);

    })
  }
  extractContent(key: string, text: any) {
    let res = text.replace(key, '');
    return res; //new DOMParser().parseFromString(text, "text/html") . documentElement . textContent;

  }

  toggleclose() {
    //this.iscorss = !this.iscorss;
    this.thiscrosscom.emit(false);
  }
  isShown: boolean = false; // hidden by default
  toggleShow() {
      this.isShown = !this.isShown;

  }

}
export interface Result {
  key: string;
  preview: string;
}