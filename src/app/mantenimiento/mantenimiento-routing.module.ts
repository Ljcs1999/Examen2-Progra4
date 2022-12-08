import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path:'',
    children:[
      {path:'invoice',component:InvoiceComponent},
      {path:'invoice-detail',component:InvoiceDetailComponent},
      {path:'item',component:ItemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
