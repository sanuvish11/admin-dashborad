import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatQueueComponent } from './component/navigation-panel/chat-queue/chat-queue.component';
import { ChatHistoryComponent } from './component/navigation-panel/chat-history/chat-history.component';
import { CrossReferenceComponent } from './component/navigation-panel/cross-reference/cross-reference.component';
import { Mp3ClipsComponent } from './component/navigation-panel/mp3-clips/mp3-clips.component';
import { BarnaStatisticsComponent } from './component/navigation-panel/barna-statistics/barna-statistics.component';
import { CalendarComponent } from './component/navigation-panel/calendar/calendar.component';
import { PdfQuotesComponent } from './component/navigation-panel/pdf-quotes/pdf-quotes.component';
import { PersonalFavsComponent } from './component/navigation-panel/personal-favs/personal-favs.component';
import { StrongsComponent } from './component/navigation-panel/strongs/strongs.component';
import { WorkAreaNotesComponent } from './component/navigation-panel/work-area-notes/work-area-notes.component';
import { WorkAreaComponent } from './component/navigation-panel/work-area/work-area.component';
import { BibleComponent } from './component/navigation-panel/bible/bible.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatComponent } from './component/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DynamicModule } from 'ng-dynamic-component';
import { PositionsService } from './service/positions.service';
import { GridsterModule } from 'angular-gridster2';
import { DynamicIoModule } from 'ng-dynamic-component';
import { JourneyComponent } from './component/journey/journey.component';
import { ReportsmetricsComponent } from './component/reportsmetrics/reportsmetrics.component';
import { FlagsComponent } from './component/flags/flags.component';
import { VolunteerregistrationComponent } from './component/volunteerregistration/volunteerregistration.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlankComponent } from './blank/blank.component';
import { LustDeceitCoverComponent } from './component/lust-deceit-cover/lust-deceit-cover.component';
import { Mp3pdfetcComponent } from './component/mp3pdfetc/mp3pdfetc.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { CalendercomComponent } from './component/navigation-panel/calendercom/calendercom.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { PdfuploadComponent } from './pdfupload/pdfupload.component';


const config: SocketIoConfig = { url: 'http://ec2-3-139-227-180.us-east-2.compute.amazonaws.com:8080', options: {} };
// const config: SocketIoConfig = { url: 'http://ec2-18-191-219-191.us-east-2.compute.amazonaws.com:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatQueueComponent,
    ChatHistoryComponent,
    CrossReferenceComponent,
    Mp3ClipsComponent,
    BarnaStatisticsComponent,
    CalendarComponent,
    PdfQuotesComponent,
    PersonalFavsComponent,
    StrongsComponent,
    WorkAreaNotesComponent,
    WorkAreaComponent,
    BibleComponent,
    ChatComponent,
    DashboardComponent,
    JourneyComponent,
    ReportsmetricsComponent,
    FlagsComponent,
    VolunteerregistrationComponent,
    BlankComponent,
    LustDeceitCoverComponent,
    Mp3pdfetcComponent,
    AdminDashboardComponent,
    CalendercomComponent,
    LoginComponent,
    PdfuploadComponent,
  ],
  imports: [CKEditorModule,AngularEditorModule,CommonModule,DragDropModule,
    
    BrowserModule,HttpClientModule,FormsModule,DynamicModule,GridsterModule,DynamicIoModule,CalendarModule,ReactiveFormsModule,
    AppRoutingModule,DragDropModule,SocketIoModule.forRoot(config)
  ],
  providers: [PositionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
