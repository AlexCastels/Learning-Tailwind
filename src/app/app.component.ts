import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ViewComponent} from "./components/view/view.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ViewComponent, NavbarComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newProj';
}
