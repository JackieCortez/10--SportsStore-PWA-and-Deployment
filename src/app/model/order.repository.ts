import { Injectable } from "@angular/core"; 
import { Observable } from "rxjs";
import { Order } from "./oder.model";
import { StaticDataSource } from "./stattic.datasource";

@Injectable()
export class OrderRepository{
    private orders: Order [];

    constructor(private dataSource: StaticDataSource){}

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order>{
        return this.dataSource.saveOrder(order);
    }
}