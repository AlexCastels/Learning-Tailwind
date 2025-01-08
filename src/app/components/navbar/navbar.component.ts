import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    scrollToid(id: string): void {
        const element = document.getElementById(id) ;
        if (element) {
            const offset = 80 ;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY ;
            const offSetPosition = elementPosition - offset ;
            window.scrollTo({top : offSetPosition , behavior: 'smooth'}) ;
        } else {
            console.error(`Elemento con id "${ id }" non trovato.`) ;
        }
    }
}
