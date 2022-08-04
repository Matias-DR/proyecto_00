import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from '../../interfaces/carousel';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    @Input() values!: Carousel;

    constructor() { }

    ngOnInit(): void {
        console.log(this.values.id)
    }

}
