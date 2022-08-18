import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../../services/shopping-cart.service';


@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    productsQuantity$: Observable<number> = this.shoppingCartService.productsQuantity$;
    @Output() shoppEvent: EventEmitter<any> = new EventEmitter<any>()

    constructor(
        private shoppingCartService: ShoppingCartService,
    ) { }

    ngOnInit(): void {
    }

    click(): void {
        this.shoppEvent.emit()
        // A este componente ponerle un modal xl, común (que se cierre al clickear por fuera de su contenedor), con la lista de elementos a comprar y la opción sobre cada uno para permitir eliminarlo y aumentarlo o disminuirlo en cantidad. Además, dos botones que permitan cerrar el modal o dirigirse al cajero
    }
}
