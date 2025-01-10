import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgForOf , NgIf } from "@angular/common";

@Component({
  selector: 'app-time',
  standalone: true,
    imports: [
        FormsModule ,
        NgForOf ,
        NgIf
    ],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {

    date : Date = new Date() ;
    hours: string[] = [] ;
    minutes: string[] = [] ;
    selectedHour: string = this.date.getHours().toString() ;
    selectedMinute: string = this.date.getMinutes().toString() ;
    dropdownOpen: boolean = false ;

    constructor() {
        this.generateHours();
        this.generateMinutes();
    }

    // Genera ore (00-23)
    generateHours(): void {
        for (let i = 0; i < 24; i++) {
            this.hours.push(i.toString().padStart(2, '0'));
        }
    }

    // Genera minuti (00-59)
    generateMinutes(): void {
        for (let i = 0; i < 60; i++) {
            this.minutes.push(i.toString().padStart(2, '0'));
        }
    }

    // Apre o chiude il dropdown specificato
    toggleDropdown(): void {
        this.dropdownOpen = !this.dropdownOpen
    }

    // Seleziona un'ora
    selectHour(hour: string): void {
        this.selectedHour = hour ;
    }

    // Seleziona un minuto
    selectMinute(minute: string): void {
        this.selectedMinute = minute;
        this.dropdownOpen = false; // Chiude il dropdown
    }

    // Formatta l'orario come HH:mm
    formatTime(hour: string, minute: string): string {
        return `${hour}:${minute}`;
    }
}
