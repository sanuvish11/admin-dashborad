import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, CompactType, GridsterItemComponentInterface } from 'angular-gridster2';

import { PositionsService } from 'src/app/service/positions.service';
import { ChatComponent } from '../chat/chat.component';
import { FlagsComponent } from '../flags/flags.component';
import { JourneyComponent } from '../journey/journey.component';
import { LustDeceitCoverComponent } from '../lust-deceit-cover/lust-deceit-cover.component';
import { Mp3pdfetcComponent } from '../mp3pdfetc/mp3pdfetc.component';
import { BarnaStatisticsComponent } from '../navigation-panel/barna-statistics/barna-statistics.component';
import { BibleComponent } from '../navigation-panel/bible/bible.component';
import { CalendercomComponent } from '../navigation-panel/calendercom/calendercom.component';
import { ChatHistoryComponent } from '../navigation-panel/chat-history/chat-history.component';
import { ChatQueueComponent } from '../navigation-panel/chat-queue/chat-queue.component';
import { CrossReferenceComponent } from '../navigation-panel/cross-reference/cross-reference.component';
import { Mp3ClipsComponent } from '../navigation-panel/mp3-clips/mp3-clips.component';
import { PdfQuotesComponent } from '../navigation-panel/pdf-quotes/pdf-quotes.component';
import { PersonalFavsComponent } from '../navigation-panel/personal-favs/personal-favs.component';
import { StrongsComponent } from '../navigation-panel/strongs/strongs.component';
import { WorkAreaNotesComponent } from '../navigation-panel/work-area-notes/work-area-notes.component';
import { WorkAreaComponent } from '../navigation-panel/work-area/work-area.component';
import { ReportsmetricsComponent } from '../reportsmetrics/reportsmetrics.component';
import { VolunteerregistrationComponent } from '../volunteerregistration/volunteerregistration.component';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  component1 = ChatQueueComponent;
  component2 = ChatComponent;
  component3 = ChatHistoryComponent
  component4 = BibleComponent;
  component5 = CrossReferenceComponent;
  component6 = StrongsComponent;
  component7 = Mp3ClipsComponent;
  component8 = WorkAreaComponent;
  component9 = WorkAreaNotesComponent;
  component10 = BarnaStatisticsComponent;
  component11 = CalendercomComponent;
  component12 = PdfQuotesComponent;
  component13 = PersonalFavsComponent;
  component14 = JourneyComponent;
  component15 = ReportsmetricsComponent;
  component16 = FlagsComponent;
  component17 = VolunteerregistrationComponent;
  LustDeceitCoverComponent = LustDeceitCoverComponent;
  Mp3pdfetcComponent = Mp3pdfetcComponent;

  pdfqu?: boolean
  mp3?: boolean
  chatqueue = false;
  workarea = false;
  bible = false;
  WorkAreaNotes = false;
  strongs = false;
  crossreference = false;
  personalfavs = false;
  chathistory = false;
  calendar = false;
  mp3clips = false;
  pdfquotes = false;
  barnastatistics = false;
  chat = false;
  lustdecent = false;
  mp3pdfetc = false;
  adminname1?: any;
  options?: GridsterConfig;
  dashboard: Array<GridsterItem> = [{ cols: 3, rows: 3, x: 1, y: 0 }]
  loaded = false;
  constructor(private posServ: PositionsService, private TokenStorageService: TokenStorageService) {
    setInterval(() => {
      this.timeNow = new Date();
    }, 1);
  }
  ngOnInit() {
    let role = localStorage.getItem("role");
    console.log(role)
    this.adminname1 = localStorage.getItem("adminname");
    console.log(name)
    console.log(this.dashboard)
    this.options = {
      fixedRowHeight: 120,
      gridType: 'fixed',
      compactType: CompactType.None,
      margin: 1,
      outerMargin: false,
      minRows: 1,
      maxRows: 100,
      minItemRows: 1,
      maxItemRows: 50,
      defaultItemRows: 3,
      minCols: 3,
      maxCols: 90,
      maxItemCols: 100,
      fixedColWidth: 100,
      enableEmptyCellClick: false,
      minItemCols: 1,
      defaultItemCols: 1,
      maxItemArea: 250,
      minItemArea: 1,
      swap: true,
      displayGrid: 'onDrag&Resize',
      // compactType: 'none', // 'compactUp&Left',compactLeft&Up'
      pushItems: true,
      resizable: { enabled: true },
      draggable: {
        enabled: true
      },

      itemChangeCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => this.itemChange(item, itemComponent),
      itemResizeCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => this.itemResize(item, itemComponent),
    };

    // this.dashboard = [
    //   { x: 0, y: 0, cols: 3, rows: 5 },
    // ]

    // hiding the gridster untill positions are loaded
    this.loaded = false;

    this.posServ.getPositions().subscribe((positions) => {
      // this.dashboard = positions;
      this.loaded = true;
    })

  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    throw new Error('Method not implemented.');
  }
  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    throw new Error('Method not implemented.');
  }
  timeNow: Date = new Date();

  //pdf check uncheck
  pdfthis = {
    thispdf: (e: any) => {
      this.pdfquotes = e;
      this.onCheckboxChange()
    }
  }
  onCheckboxChange() {
    if (this.pdfqu) {
      setTimeout(() => {
        this.pdfqu = false
      });
    } else {
      this.pdfqu = true
    }
  }
  //mp3 check unckeck
  mp3this = {
    thismp3: (e: any) => {
      this.mp3clips = e;
      this.onCheckboxChangemp3()
    }
  }
  onCheckboxChangemp3() {
    if (this.mp3) {
      setTimeout(() => {
        this.mp3 = false
      });
    }
    else {
      this.mp3 = true
    }
  }
  // calender
  calenderthis = {
    thiscalandercom: (e: any) => {
      this.calendar = e;
      this.onCheckboxChangecal()
    }
  }
  cal?: boolean
  onCheckboxChangecal() {
    if (this.cal) {
      setTimeout(() => {
        this.cal = false
      });
    }
    else {
      this.cal = true
    }
  }
  //chat history
  chathist = {
    chathis: (e: any) => {
      this.chathistory = e;
      this.onCheckboxChangechat()
    }
  }
  chathis?: boolean
  onCheckboxChangechat() {
    if (this.chathis) {
      setTimeout(() => {
        this.chathis = false
      });
    }
    else {
      this.chathis = true
    }
  }


  //work area

  
  workareathis = {
    wrokareathis: (e: any) => {
      this.workarea = e;
      this.onCheckboxChangework()
    },
    // collapework: (e: any) => {
    //   this.collapseWorkArea = e
    // }

  }
  work?: boolean
  onCheckboxChangework() {
    if (this.work) {
      setTimeout(() => {
        this.work = false
      });
    } else {
      this.work = true
    }
  }
  //work area
  //chat quee
  chatquee = {
    chatcom: (e: any) => {
      if (e.isclose === 0) {
        this.chat = true
      }
      else {
        this.chatqueue = e;
        this.onCheckboxChangechatqueue()
      }

    }
  }
  chatque?: boolean
  onCheckboxChangechatqueue() {
    if (this.chatque) {
      setTimeout(() => {
        this.chatque = true
        this.chat = true

      });
    } else {
      this.chatque = false


    }
  }
  biblethis = {
    isbiblecom: (e: any) => {
      if (e.isclose === 0) {
        this.strongs = true
      }
      else {
        this.bible = e;

        this.onCheckboxChangeBible()
      }
    }
  }
  biblec?: boolean
  onCheckboxChangeBible() {
    if (this.biblec) {
      setTimeout(() => {
        this.biblec = false
      });
    } else {
      this.biblec = true
    }
  }
  workareanotethis = {
    wrokareathis: (e: any) => {
      this.WorkAreaNotes = e;
      this.onCheckboxChangeworkareanotes()
    }
  }
  workareano?: boolean
  onCheckboxChangeworkareanotes() {
    if (this.workareano) {
      setTimeout(() => {
        this.workareano = false
      });
    } else {
      this.workareano = true
    }
  }
  //stronge
  collapseStrong = false
  strongsthis = {
    thistrong: (e: any) => {
      if (e.isclose === 0) {
        this.crossreference = true
      }
      else {
        this.strongs = e;
        this.onCheckboxChangestrong()
      }
    }


  }
  strong?: boolean
  onCheckboxChangestrong() {
    if (this.strong) {
      setTimeout(() => {
        this.strong = false
      });
    } else {
      this.strong = true
    }
  }

  lustthis = {
    thislustdecit: (e: any) => {
      this.lustdecent = e;
      this.onCheckboxChangelust()
    },
    // collapshaeder: (e: any) => {
    //   this.collapselustdecent = e
    // }
  }
  lust?: boolean
  onCheckboxChangelust() {
    if (this.lust) {
      setTimeout(() => {
        this.lust = false

      });
    } else {
      this.lust = true
    }
  }
  chatthis = {
    thischat: (e: any) => {
      console.log(e.isclose)
      if (e.isclose === 0) {
        this.calendar = true
      }
      else {
        this.chat = e.status;
        this.onCheckboxChangechating()
      }
    }

  }
  chatting?: boolean
  onCheckboxChangechating() {
    if (this.chatting) {
      setTimeout(() => {
        this.chatting = false

      });
    } else {
      this.chatting = true

    }
  }
  //cross refence
  corssref = {
    thiscrosscom: (e: any) => {
      this.crossreference = e;
      this.onCheckboxChangecrossref()
    }
  }

  crossref?: boolean
  onCheckboxChangecrossref() {
    if (this.crossref) {
      setTimeout(() => {
        this.crossref = false
      });
    } else {
      this.crossref = true
    }
  }


  //cross refence
  psersonafavthis = {
    thispersonal: (e: any) => {
      this.personalfavs = e;
      this.onCheckboxChangepersonalfav()
    }
  }

  personal?: boolean
  onCheckboxChangepersonalfav() {
    if (this.personal) {
      setTimeout(() => {
        this.personal = false
      });
    } else {
      this.personal = true
    }
  }
  //barna statics
  barnastaticsthis = {
    baranathis: (e: any) => {
      this.barnastatistics = e;
      this.onCheckboxChangebaranastatic()
    }
  }

  barnastatic?: boolean
  onCheckboxChangebaranastatic() {
    if (this.barnastatic) {
      setTimeout(() => {
        this.barnastatic = false
      });
    } else {
      this.barnastatic = true
    }
  }
  Journeythis = {
    thisjourney: (e: any) => {
      if (e.isclose === 0) {
        this.lustdecent = true
        this.mp3pdfetc = true
      }
      else {
        this.journry = e.status;
        this.onCheckboxChangebaranaJourney()
      }
    }
  }

  journey?: boolean
  onCheckboxChangebaranaJourney() {
    if (this.journey) {
      setTimeout(() => {
        this.journey = false
      });
    } else {
      this.journey = true
    }
  }

  mp3pdfetcthis = {
    thismp3pdfetc: (e: any) => {
      this.mp3pdfetc = e;
      this.onCheckboxChangebaranamp3pdf()
    }
  }

  mp3pdf?: boolean
  onCheckboxChangebaranamp3pdf() {
    if (this.mp3pdf) {
      setTimeout(() => {
        this.mp3pdf = false
      });
    } else {
      this.mp3pdf = true
    }
  }
  toggelechatpanel() {
    this.chat = !this.chat;
  }
  panelcomp(event: any) {
    this.chat = event
    console.log(event)
  }

  journry = false;
  toggelejourney() {
    this.journry = !this.journry;
  }
  journrycomp(event: any) {
    this.journry = event
    console.log(event)
  }


  journeyTab = {
    thisjourney: (e: any) => {
      console.log(e)
      this.journry = e;

    }
  }
  toggelelust() {
    this.lustdecent = !this.lustdecent;
  }
  lustcomp(event: any) {
    this.lustdecent = event
    console.log(event)
  }
  toggelemp3pdfetc() {
    this.mp3pdfetc = !this.mp3pdfetc;
  }
  mp3pdfetccomp(event: any) {
    this.mp3pdfetc = event
    console.log(event)
  }

  lustTab = {
    thislustdecit: (e: any) => {
      console.log(e)
      this.lustdecent = e;

    }
  }
  mp3pdfetcTab = {
    thismp3pdfetc: (e: any) => {
      console.log(e)
      this.mp3pdfetc = e;

    }
  }

  flagTab = {
    thisflag: (e: any) => {
      this.flag = e;
    }
  }

  reportab = {
    thisreport: (e: any) => {
      this.reportmatric = e;
    }
  }
  chatTab = {
    thischat: (e: any) => {
      console.log(e)
      this.chat = e;
    }
  }
  // chatTab1 = {
  //   chatcom: (e: any) => {
  //     console.log(e)
  //     this.chat = e;
  //   }
  // }
  // openchat(e:any){
  //   console.log("chatcom")
  //   this.chat = e
  // }

  volunteerTab = {
    thisvolunteer: (e: any) => {
      this.volunteer = e;
    }
  }

  reportmatric = false;
  toggelereport() {
    this.reportmatric = !this.reportmatric;
  }
  toggelemp3pdfect() {
    this.mp3pdfetc = !this.mp3pdfetc;
  }
  toggelelustde() {
    this.lustdecent = !this.lustdecent;
  }
  reportcom(event: any) {
    this.reportmatric = event
    console.log(event)
  }
  flag = false
  toggeleflag() {
    this.flag = !this.flag;
  }
  flagcom(event: any) {
    this.flag = event
    console.log(event)
  }


  volunteer = false
  toggelevolunteer() {
    this.volunteer = !this.volunteer;
  }
  volunteercom(event: any) {
    this.volunteer = event
    console.log(event)
  }

  panelOpenState = false;
  data: any =
    [
      {
        "parentName": "Navigation Panel",
      },
    ]

  abc(event: any) {
    this.chatqueue = event
    console.log(event)
  }
  panelcom(event: any) {
    this.chat = event
    console.log(event)
  }
  chathistery(event: any) {
    this.chathistory = event
    console.log(event)
  }


  workareacom(event: any) {
    this.workarea = event
    console.log(event)
  }
  workareanotecom(event: any) {
    this.WorkAreaNotes = event
    console.log(event)
  }
  biblecom(event: any) {
    this.bible = event
    console.log(event)
  } strongcom(event: any) {
    this.strongs = event
    console.log(event)
  }
  chatpanelcom(event: any) {
    this.chat = event
    console.log(event)
  }
  crosscom(event: any) {
    this.crossreference = event
    console.log(event)
  }
  personalfavcom(event: any) {
    this.personalfavs = event
    console.log(event)
  }

  mp3com(event: any) {
    this.mp3clips = event
    console.log(event)
  }
  pdfcom(event: any) {
    this.pdfquotes = event
    console.log(event)
  }
  baranastatcom(event: any) {
    this.barnastatistics = event
    console.log(event)
  }

  toggleVisibility(pramId: any, e: any) {
    console.log(pramId)
    if (pramId == "chatqueue") {

      this.chatqueue = !this.chatqueue
    }
    if (pramId == "chat") {
      this.chat = !this.chat
    }
    if (pramId == "workarea") {
      this.workarea = !this.workarea;
    }
    if (pramId == "bible") {
      this.bible = !this.bible;
    }
    if (pramId == "WorkAreaNotes") {
      this.WorkAreaNotes = !this.WorkAreaNotes;
    }
    if (pramId == "strongs") {
      this.strongs = !this.strongs;
    }
    if (pramId == "lustdecent") {
      this.lustdecent = !this.lustdecent;
    }
    if (pramId == "crossreference") {
      this.crossreference = !this.crossreference;
    }
    if (pramId == "personalfavs") {
      this.personalfavs = !this.personalfavs;
    }
    if (pramId == "chathistory") {
      this.chathistory = !this.chathistory;
    }
    if (pramId == "calendar") {
      this.calendar = !this.calendar;
    }
    if (pramId == "mp3clips") {
      this.mp3clips = !this.mp3clips;
    }
    if (pramId == "pdfquotes") {
      this.pdfquotes = !this.pdfquotes;
    }
    if (pramId == "barnastatistics") {
      this.barnastatistics = !this.barnastatistics;
    }
    if (pramId == "mp3pdfetc") {
      this.mp3pdfetc = !this.mp3pdfetc;
    }

  }
  chatQueue: any;

  toggleAccordian(event: any, index: number) {
    var element = event.target;
    element.classList.toggle("active");
    if (this.data[index].isActive) {
      this.data[index].isActive = true;
    } else {
      this.data[index].isActive = false;
    }
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  itemChange(item: any, itemComponent: any) {
    console.info(`state: ${JSON.stringify(this.dashboard, null, 5)}`);
    if (this.options?.api && this.options.api.optionsChanged) {

      this.posServ.savePositions(this.dashboard)
    }
  }
  itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  openchat(e: any) {
    console.log("chatcom")
    // this.chat = e
  }

  logout() {
    this.TokenStorageService.signOut();
    window.location.reload();
  }
}
