/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<InvoiceDetail, 'id'>, 'invoiceId'>, schemaOptions: { title: 'NewInvoiceDetailInInvoice', exclude: [ 'id' ], optional: [ 'invoiceId' ] })
 */
export interface NewInvoiceDetailInInvoice {
  invoiceId?: string;
  itemId?: string;
  quantity?: number;
}
