import { Component } from '@angular/core';
import { NgClass , NgForOf } from "@angular/common";

@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [
        NgClass ,
        NgForOf
    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

    currentDate: Date = new Date(); // Data corrente
    selectedDate: Date | null = null; // Data selezionata
    daysInMonth: number[] = []; // Giorni del mese corrente
    emptyDays: number[] = []; // Spazi vuoti prima del primo giorno
    weekDays: string[] = ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa' , 'Do'];
    monthNames: string[] = [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
    ];

    constructor() {
        this.updateCalendar();
    }

    // Aggiorna il calendario in base alla data corrente
    updateCalendar() : void {
        const year : number = this.currentDate.getFullYear();
        const month : number = this.currentDate.getMonth();

        // Calcola il giorno della settimana del primo giorno del mese
        const firstDayOfMonth : number = new Date(year, month, 1).getDay();

        // Modifica per spostare il primo giorno a lunedì
        const adjustedFirstDay : number = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

        // Aggiungi gli spazi vuoti
        this.emptyDays = Array.from({ length: adjustedFirstDay });

        // Calcola il numero di giorni nel mese corrente
        const daysInMonth : number = new Date(year, month + 1, 0).getDate();

        // Popola i giorni del mese
        this.daysInMonth = Array.from({ length: daysInMonth }, (_ : unknown, i : number ) : number => i + 1);

    }

    // Passa al mese precedente
    prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.updateCalendar();
    }

    // Passa al mese successivo
    nextMonth(): void {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.updateCalendar();
    }

    // Seleziona una data
    selectDate(day: number) : void {
        this.selectedDate = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth(),
            day
        );
        console.log('Data selezionata:', this.selectedDate);
    }

    // Verifica se una data è selezionata
    isSelected(day: number): boolean {
        if (!this.selectedDate) return false;
        return (
            this.selectedDate.getFullYear() === this.currentDate.getFullYear() &&
            this.selectedDate.getMonth() === this.currentDate.getMonth() &&
            this.selectedDate.getDate() === day
        );
    }

    getToday() : void {
        this.selectedDate = new Date() ;
    }

    deleteSelectedDate() : void {
        this.selectedDate = null ;
    }

}
