/* tslint:disable */
/* eslint-disable */
import { InvoiceDetailWithRelations } from './invoice-detail-with-relations';

/**
 * (tsType: InvoiceWithRelations, schemaOptions: { includeRelations: true })
 */
export interface InvoiceWithRelations {
  address?: string;
  correlative: number;
  email?: string;
  id: string;
  invoiceDetails?: Array<InvoiceDetailWithRelations>;
  name: string;
  phone?: string;
  scheduled: string;
  special?: Array<number>;
}
