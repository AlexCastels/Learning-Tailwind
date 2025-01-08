import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-grid',
    standalone: true,
    imports: [
        NgForOf,
        NgIf
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
        {box : 9},
        {box : 10},
        {box : 11},
        {box : 12},
    ]

    constructor() {}

    private _imagePerRow : number = 4

    get imagePerRow() : number {
        return this._imagePerRow
    }

    set imagePerRow(value : number){
        this._imagePerRow = this._imagePerRow + value
    }

    next() : void{
        this.imagePerRow = this._imagePerRow
    }


    //rifacendomi all'useState di react, poter aggiornare una variabile dinamicamente
}
