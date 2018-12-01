import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';


@Component({
  selector: 'page1-app',
  templateUrl: './page1.component.html'
})
export class Page1Component implements OnInit {

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() {}

   dateObj = new Date();
   yearMonth = this.dateObj.getUTCFullYear() + '-' + (this.dateObj.getUTCMonth() + 1);
    
   public  data: any = [{
    title: 'All Day Event',
    start: this.yearMonth + '-01'
}];



  ngOnInit() {
     this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: this.data
      };
  }
  
}