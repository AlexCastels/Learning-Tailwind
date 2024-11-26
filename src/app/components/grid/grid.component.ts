import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-grid',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.css'
})
export class GridComponent {
    items = [
        {box : 1},
        {box : 2},
        {box : 3},
        {box : 4},
        {box : 5},
        {box : 6},
        {box : 7},
        {box : 8},
    ]
}
