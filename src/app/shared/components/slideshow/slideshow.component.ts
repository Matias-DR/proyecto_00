import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
    @Input() slides!: [];
    @Input() id!: number;
    slidesOpacity!: number[]

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.applyOpacityToImages()
    }

    applyOpacityToImages(): void {
        this.slidesOpacity = this.slides.map(
            () => 0
        )
        this.slidesOpacity[0] = 1
    }

    // slideSelection(slide_number: number): void {
    //     const id: string = 'slide' + this.id + '-' + slide_number
    //     location.hash = id
    //     this.router.navigateByUrl('#' + id)
    //     this.changeOpacityToSelectedImage(slide_number)
    // }

    private changeOpacityToSelectedImage(slide_number: number, side: number): void {
        // this.slidesOpacity = this.slidesOpacity.map(
        //     (_, index) => index == slide_number ? 1 : 0
        // )
        this.slidesOpacity[slide_number + side] = 1
        this.slidesOpacity[slide_number] = 0
    }

    leftSlideSelection(): void {
        let index = this.slidesOpacity.findIndex(
            (value) => value == 1
        )
        if (index > 0) {
            this.changeOpacityToSelectedImage(index, -1)
        }
    }

    rightSlideSelection(): void {
        let index = this.slidesOpacity.findIndex(
            (value) => value == 1
        )
        if (index < this.slidesOpacity.length - 1) {
            this.changeOpacityToSelectedImage(index, 1)
        }
    }
}
