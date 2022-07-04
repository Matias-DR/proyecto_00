import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    @Output() goToCashier: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    goToCashieEvent(): void {
        this.goToCashier.emit();
    }
}
