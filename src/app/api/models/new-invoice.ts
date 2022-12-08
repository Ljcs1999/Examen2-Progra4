/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Invoice, 'id'>, schemaOptions: { title: 'NewInvoice', exclude: [ 'id' ] })
 */
export interface NewInvoice {
  address?: string;
  correlative: number;
  email?: string;
  name: string;
  phone?: string;
  scheduled: string;
  special?: Array<number>;
}
