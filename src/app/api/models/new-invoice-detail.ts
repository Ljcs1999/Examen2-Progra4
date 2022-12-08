/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<InvoiceDetail, 'id'>, schemaOptions: { title: 'NewInvoiceDetail', exclude: [ 'id' ] })
 */
export interface NewInvoiceDetail {
  invoiceId?: string;
  itemId?: string;
  quantity?: number;
}
