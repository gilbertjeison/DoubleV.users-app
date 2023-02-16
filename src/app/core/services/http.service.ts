import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpService {
  private cachedResponse: Observable<any> = new Observable();
  private cachedUrl: string = '';

  constructor(
    protected http: HttpClient,
    protected router: Router,
    protected loadingService: LoadingService
  ) {}

  getError(callbackFunc?: () => void, showLoading?: boolean) {
    return catchError((error: HttpErrorResponse) => {
      if (callbackFunc) {
        callbackFunc();
      }
      let err = error;
      if (error.error instanceof ArrayBuffer) {
        const decodedString = String.fromCharCode.apply(
          new Uint8Array(error.error)
        );
        err = JSON.parse(decodedString);
      }
      this.errorHandler(err, showLoading);
      return throwError(err);
    });
  }

  request(req: Observable<any>, showLoading: boolean): Observable<any> {
    this.enableLoading(showLoading);
    return req.pipe(
      map((res: Response) => {
        this.disableLoading(showLoading);
        let result = null;
        if (res !== null) {
          result = res;
        }
        return result;
      }),
      shareReplay({ bufferSize: 1, refCount: true }),
      this.getError(undefined, showLoading)
    );
  }

  errorHandler(error: HttpErrorResponse, showLoading?: boolean) {
    this.disableLoading(showLoading);
    switch (true) {
      case error.status === 503:
        this.router.navigate(['error', '503']);
        break;
    }
  }

  get(
    url: string,
    requestOptions?: {},
    cacheRequest?: boolean,
    showLoading = false
  ): Observable<any> {
    if (
      !this.cachedResponse ||
      (this.cachedResponse && url !== this.cachedUrl)
    ) {
      const observableRequest = this.request(
        this.http.get<any>(url, requestOptions),
        showLoading
      );
      if (cacheRequest) {
        this.cachedResponse = observableRequest;
        this.cachedUrl = url;
      }
      return observableRequest;
    }

    return this.cachedResponse;
  }

  post(
    url: string,
    payload?: any,
    requestOptions?: {},
    cacheRequest?: boolean,
    showLoading = false
  ) {
    if (
      !this.cachedResponse ||
      (this.cachedResponse && url !== this.cachedUrl)
    ) {
      const observableRequest = this.request(
        this.http.post<any>(url, payload ? payload : null, requestOptions),
        showLoading
      );
      if (cacheRequest) {
        this.cachedResponse = observableRequest;
        this.cachedUrl = url;
      }
      return observableRequest;
    }
    return this.cachedResponse;
  }

  put(
    url: string,
    payload?: any,
    cacheRequest?: boolean,
    requestOptions?: {},
    showLoading = false
  ) {
    if (
      !this.cachedResponse ||
      (this.cachedResponse && url !== this.cachedUrl)
    ) {
      const observableRequest = this.request(
        this.http.put<any>(url, payload ? payload : null, requestOptions),
        showLoading
      );
      if (cacheRequest) {
        this.cachedResponse = observableRequest;
        this.cachedUrl = url;
      }
      return observableRequest;
    }
    return this.cachedResponse;
  }

  patch(
    url: string,
    payload?: any,
    requestOptions?: {},
    cacheRequest?: boolean,
    showLoading = false
  ) {
    if (
      !this.cachedResponse ||
      (this.cachedResponse && url !== this.cachedUrl)
    ) {
      const observableRequest = this.request(
        this.http.patch<any>(url, payload ? payload : null, requestOptions),
        showLoading
      );
      if (cacheRequest) {
        this.cachedResponse = observableRequest;
        this.cachedUrl = url;
      }
      return observableRequest;
    }
    return this.cachedResponse;
  }

  delete(
    url: string,
    payload?: any,
    requestOptions?: {},
    cacheRequest?: boolean,
    showLoading = false
  ) {
    if (
      !this.cachedResponse ||
      (this.cachedResponse && url !== this.cachedUrl)
    ) {
      const observableRequest = this.request(
        this.http.request<any>('delete', url, {
          ...requestOptions,
          body: payload
        }),
        showLoading
      );
      if (cacheRequest) {
        this.cachedResponse = observableRequest;
        this.cachedUrl = url;
      }
      return observableRequest;
    }
    return this.cachedResponse;
  }

  private enableLoading(showLoading: boolean) {
    if (showLoading) {
      this.loadingService.enableLoading();
    }
  }

  private disableLoading(showLoading?: boolean) {
    if (showLoading) {
      this.loadingService.disableLoading();
    }
  }
}
