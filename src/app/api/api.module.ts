/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { InvoiceDetailControllerService } from './services/invoice-detail-controller.service';
import { InvoiceDetailInvoiceControllerService } from './services/invoice-detail-invoice-controller.service';
import { InvoiceDetailItemControllerService } from './services/invoice-detail-item-controller.service';
import { InvoiceControllerService } from './services/invoice-controller.service';
import { InvoiceInvoiceDetailControllerService } from './services/invoice-invoice-detail-controller.service';
import { ItemControllerService } from './services/item-controller.service';
import { ItemInvoiceDetailControllerService } from './services/item-invoice-detail-controller.service';
import { PingControllerService } from './services/ping-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    InvoiceDetailControllerService,
    InvoiceDetailInvoiceControllerService,
    InvoiceDetailItemControllerService,
    InvoiceControllerService,
    InvoiceInvoiceDetailControllerService,
    ItemControllerService,
    ItemInvoiceDetailControllerService,
    PingControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
