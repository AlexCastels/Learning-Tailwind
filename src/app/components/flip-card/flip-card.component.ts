import {Component} from '@angular/core';
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
        {
            step: "04",
            name: "Co-Work",
            imageUrl: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvd29ya3xlbnwwfHwwfHx8MA%3D%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo impedit quaerat quia, repudiandae unde.",
        },
        {
            step: "05",
            name: "Support",
            imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN1cHBvcnR8ZW58MHx8MHx8fDA%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem fugit illo laboriosam nihil nulla porro, qui quisquam!",
        },
        {
            step: "06",
            name: "Upgrade",
            imageUrl: "https://plus.unsplash.com/premium_photo-1695185954894-e9382c6f4da8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbGl6emF6aW9uZXxlbnwwfHwwfHx8MA%3D%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo impedit quaerat quia, repudiandae unde.",
        },
        {
            step: "07",
            name: "Merchandise",
            imageUrl: "https://images.unsplash.com/photo-1633464130613-0a9154299ac2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lcmNoYW5kaXNlfGVufDB8fDB8fHww",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem fugit illo laboriosam nihil nulla porro, qui quisquam!",
        },
    ]
}

