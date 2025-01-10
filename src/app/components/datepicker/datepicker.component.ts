import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CalendarComponent } from "../calendar/calendar.component";
import { TimeComponent } from "../time/time.component";

@Component({
  selector: 'app-datepicker',
  standalone: true,
    imports: [
        FormsModule ,
        CalendarComponent ,
        TimeComponent
    ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
    dataValue : any ;
    timeValue : any

}
