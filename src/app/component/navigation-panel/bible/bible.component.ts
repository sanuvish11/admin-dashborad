import { templateJitUrl, ThrowStmt } from '@angular/compiler';
import {
  Component, EventEmitter, OnInit, Output
} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.css']
})
export class BibleComponent implements OnInit {
  book: any;
  chapter: any;
  version = "ESV";
  chapternext: number = +1;
  isbible = true;
  strongs = false;
  strongsList: any;
  versesList = [];
  sts = new Array();
  selectedVerse: string = "";
  selectedVerseMessage: string = "";
  collapse: boolean = false;
  @Output() isbiblecom = new EventEmitter();
  form: any = {};
  newTestament: boolean = false;
  oldTestament: boolean = false;
  collpsemenu: boolean = false;
  public show: boolean = false;
  public buttonName: any = 'Show';
  isShowDiv = true;
  public show1: boolean = false;
  public buttonName1: any = 'Show';
  isShowDiv1 = true;
  public show2: boolean = false;
  public buttonName2: any = 'Show';
  isShowDiv2 = true;
  searchQuery = "";
  searchResults: any;
  preResult: any;
  optResults = new Array();
  BibleVerses: any
  number: boolean = false;
  number1: boolean = false;
  hideVerses: boolean = true;
  hideSearch: boolean = true;
  i: any;
  verse: any;
  constructor(private apiService: AuthService) {

  }

  ngOnInit() { }

  togglecloseb() {
    this.isbiblecom.emit(false);
  }

  toggleTestament(tab: number) {
    console.log(tab);
    if (tab === 1) {
      this.oldTestament = !this.oldTestament;
      this.newTestament = false;
    }
    if (tab === 2) {
      this.newTestament = !this.newTestament;
      this.oldTestament = false;
    }
  }
  toogelehide() {
    this.number = !this.number;
    this.number = true
    this.number1 = false

  }
  toogelheader() {
    this.number1 = !this.number1;
    this.number1 = true
    this.number = false;
  }
  toggleDisplayDiv() {
    this.isShowDiv = this.isShowDiv;
  }
  toggleOtNt() {
    this.collpsemenu = !this.collpsemenu;
    this.collpsemenu = false
    this.number1 = false
    this.oldTestament = false;

  }
  toggleSearch(tab: number) {
    console.log(tab + "   " + this.hideVerses + "  " + this.hideSearch);
    if (tab === 1) {
      this.hideVerses = true;
      this.hideSearch = false;
    } else if (tab === 2) {
      this.hideVerses = false;
      this.hideSearch = true;
    }
    console.log(tab + "   " + this.hideVerses + "  " + this.hideSearch);
  }
  toggleDisplayDiv1(bookNAme: any) {
    this.book = bookNAme;
    this.isShowDiv1 = !this.isShowDiv1;
  }
  toggleDisplayDiv2() {

    this.isShowDiv2 = !this.isShowDiv2;
  }
  value: any;
  isShown: boolean = false; // hidden by default
  toggleShow() {
    this.isShown = !this.isShown;
  }

  next(): void {
    this.chapter++;
  }
  pervious(): void {
    if (this.chapter >= 1) {
      this.chapter--;
    }

  }

  getStrong(verse: any) {
    this.verse = verse;
    this.apiService.getStrong(this.verse).subscribe((data) => {
      this.strongsList = data;
      console.log(data)

    })
  }
  search() {
    console.log(this.searchQuery + " " + this.version);
    this.apiService.fetchBibleData(this.searchQuery, this.version).subscribe((message) => {
      console.log(message);
      this.searchResults = message.json.results;
      this.preResult = message.jsonresponse;
      this.strongsList = message.strongs;
      this.versesList = message.verses;
      this.value = message.verses;
      console.log(this.value.value)
      let i = 0;
      this.optResults = [];
      this.searchResults.forEach((response: any) => {
        let jd: any = JSON.stringify(response);
        let data: Result = ({ "key": response.key || "", "preview": this.extractContent(response.key, this.preResult[i]) || "" });
        this.optResults.push(data);
        i++;
      });


      this.hideVerses = true;
      this.hideSearch = false;
    });
  }

  extractContent(key: string, text: any) {
    let res = text.replace(key, '');
    return res; //new DOMParser().parseFromString(text, "text/html") . documentElement . textContent;

  }

  toggleStrong(index: any) {

    let query = this.optResults[index].key;

    this.sts = this.strongsList.filter(function (element: any) {
      return element.verse == query;
    });
    this.selectedVerse = query;
    this.selectedVerseMessage = this.optResults[index].preview;

    this.collapse = true;
  }

  updateToggle() {
    this.collapse = false;
  }
  onSelect(strong: any) {
    this.isbiblecom.emit({ status: true, isclose: 0 });
    console.log(strong);
    localStorage.setItem("version", this.version);
    localStorage.setItem("strong", JSON.stringify(strong));
    //  localStorage.setItem("value", JSON.stringify(this.value));
  }
  getBibele(Chapter: any) {
    this.chapter = Chapter;

    this.apiService.getBible(this.version, this.book, this.chapter).subscribe((message) => {
      this.BibleVerses = message;
      console.log(this.BibleVerses);
      this.hideVerses = false;
      this.hideSearch = true;


    })
  }



}

export interface Result {
  key: string;
  preview: string;
}