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
            imageUrl: "https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VydmVyfGVufDB8fDB8fHww",
            description: "State-of-the-art diagnostics to accurately identify vehicle issues.",
        },
        {
            step: "02",
            name: "Travel",
            imageUrl: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eius error facere! Animi beatae veritatis vitae!",
        },
        {
            step: "03",
            name: "Assistance",
            imageUrl: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo impedit quaerat quia, repudiandae unde.",
        },
    ]
}
