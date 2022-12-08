import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Invoice } from 'src/app/api/models';
import { InvoiceControllerService } from 'src/app/api/services';
import { valueFunctionProp } from 'ng-zorro-antd/core/util';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice[] = [];
  visible: boolean = false;

  constructor(
    private invoiceService: InvoiceControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
  ) { }

  formInvoice: FormGroup = this.fb.group({
    id:[],
    correlative: [],
    scheduled: [],
    name: [],
    address: [],
    phone: [],
    email: [],
    special: []
  })

  ngOnInit(): void {
    this.invoiceService.find().subscribe(data => this.invoice = data)
  }

  mostrar(data?: Invoice): void {
    if (data?.id) {
      this.formInvoice.setValue(data)
    }
    this.visible = true
  }

  eliminar(id: string): void {
    this.invoiceService.deleteById({ id }).subscribe(() => {
      this.invoice = this.invoice.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado!')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')

  }

  ocultar(): void {
    this.visible = false
    this.formInvoice.reset()
  }

  guardar(): void {
    
    if (this.formInvoice.value.id) {
      this.invoiceService.updateById({ id: this.formInvoice.value.id, 'body': this.formInvoice.value }).subscribe(() => {
        this.invoice = this.invoice.map(obj => {
          if (obj.id === this.formInvoice.value.id)
            return this.formInvoice.value;
          return obj;
        })
        this.messageService.success('Registro actualizado con exito!')
      })
    } else {
      delete this.formInvoice.value.id
      this.invoiceService.create({ body: this.formInvoice.value }).subscribe((dataAgregado) => {
        this.invoice = [...this.invoice, dataAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formInvoice.reset()
      })
    }
    this.visible = false
  }

}
