import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        NgForOf,
        NgClass
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    contacts = [
        {
            id : 1 ,
            name : 'Alessandro' ,
            lastName : 'Castelli',
            personalNumber : 3272456789
        },
        {
            id : 2 ,
            name : 'Marco' ,
            lastName : 'Rossi',
            personalNumber : 3399080877
        },
        {
            id : 3 ,
            name : 'Giovanni' ,
            lastName : 'Li Causi',
            personalNumber : 3923224555
        },
        {
            id : 4 ,
            name : 'Valentino' ,
            lastName : 'Bianchi',
            personalNumber : 3546788989
        },
        {
            id : 5 ,
            name : 'Giada' ,
            lastName : 'Pastello',
            personalNumber : 3272400987
        },
        {
            id : 6 ,
            name : 'Rita' ,
            lastName : 'Chiari',
            personalNumber : 3272485597
        },
        {
            id : 7 ,
            name : 'Riccardo' ,
            lastName : 'Montello',
            personalNumber : 3270082497
        },
        {
            id : 8 ,
            name : 'Davide' ,
            lastName : 'Golia',
            personalNumber : 3272485550
        }


    ]
}
