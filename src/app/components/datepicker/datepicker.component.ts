import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CalendarComponent } from "../calendar/calendar.component";

@Component({
  selector: 'app-datepicker',
  standalone: true,
    imports: [
        FormsModule ,
        CalendarComponent
    ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
    dataValue : any ;
    timeValue : any

}
