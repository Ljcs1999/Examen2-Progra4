/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<InvoiceDetail, 'id'>, 'itemId'>, schemaOptions: { title: 'NewInvoiceDetailInItem', exclude: [ 'id' ], optional: [ 'itemId' ] })
 */
export interface NewInvoiceDetailInItem {
  invoiceId?: string;
  itemId?: string;
  quantity?: number;
}
