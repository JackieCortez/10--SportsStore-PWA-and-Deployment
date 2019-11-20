import { NgModule} from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./stattic.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule {};