import { OnInit } from '@angular/core';

export interface Product extends OnInit {
    id: number;
    name: string;
    description: string;
    price: number;
}
