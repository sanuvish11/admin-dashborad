import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';




@Component({
    selector: 'app-strongs',
    templateUrl: './strongs.component.html',
    styleUrls: ['./strongs.component.css']
})
export class StrongsComponent implements OnInit {
    isstrong = true;
    @Output() thistrong = new EventEmitter();
    IsCollapse: boolean = false
    @Output() collapsethis = new EventEmitter();
    strongsList: any;
    versesList: any;
    searchResults: any;
    preResult: any;
    optResults = new Array();
    strong: any;
    StrongDataList: any;
    version: any
    listversre?: String;
    listStrong?: String;
    constructor(private apiService: AuthService) { }


    ngOnInit() {
        this.strong = JSON.parse(localStorage.getItem("strong") || "");
        this.version = localStorage.getItem("version");
        //  this.bible = localStorage.getItem("value");
        console.log(JSON.stringify(this.strong));
        console.log(this.strong.strong + " " + this.version);
        this.apiService.fetchStrongData(this.strong.strong, this.version).subscribe((data) => {
            console.log(data);
            this.StrongDataList = data;
            this.strongsList = this.StrongDataList.strongs;
            this.versesList = this.StrongDataList.verses;
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
        // this.isstrong = !this.isstrong;
        this.thistrong.emit(false);
    }
    public show: boolean = false;
    public buttonName: any = 'Show';
    isShowDiv = true;
    
    toggleDisplayDiv() {
        this.isShowDiv = this.isShowDiv;
    }
    onSelect() {
        this.strong = JSON.parse(localStorage.getItem("strong") || "");
        this.version = localStorage.getItem("version");
        console.log(this.strong + this.version);
        //      localStorage.setItem("value", JSON.stringify(this.strong.value));
        this.thistrong.emit({ status: true, isclose: 0 });
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