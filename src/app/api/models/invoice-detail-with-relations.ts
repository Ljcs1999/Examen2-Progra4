/* tslint:disable */
/* eslint-disable */
import { InvoiceWithRelations } from './invoice-with-relations';
import { ItemWithRelations } from './item-with-relations';

/**
 * (tsType: InvoiceDetailWithRelations, schemaOptions: { includeRelations: true })
 */
export interface InvoiceDetailWithRelations {
  id?: string;
  invoice?: InvoiceWithRelations;
  invoiceId?: string;
  item?: ItemWithRelations;
  itemId?: string;
  quantity?: number;
}
