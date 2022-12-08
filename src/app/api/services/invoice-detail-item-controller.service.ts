/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceDetailItemControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation invoiceDetailItemControllerGetItem
   */
  static readonly InvoiceDetailItemControllerGetItemPath = '/invoice-details/{id}/item';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItem$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Item>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceDetailItemControllerService.InvoiceDetailItemControllerGetItemPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Item>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItem(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Item>> {

    return this.getItem$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Item>>) => r.body as Array<Item>)
    );
  }

}
