/* tslint:disable */
/* eslint-disable */
import { InvoiceDetailWithRelations } from './invoice-detail-with-relations';

/**
 * (tsType: ItemWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ItemWithRelations {
  description: string;
  id?: string;
  invoiceDetails?: Array<InvoiceDetailWithRelations>;
  value?: number;
}
