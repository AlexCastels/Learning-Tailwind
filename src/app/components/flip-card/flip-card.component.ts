import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-flip-card',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent {
    services = [
        {
            step: "01",
            name: "Diagnostics",
            imageUrl: "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "State-of-the-art diagnostics to accurately identify vehicle issues.",
        },
    ]
}
