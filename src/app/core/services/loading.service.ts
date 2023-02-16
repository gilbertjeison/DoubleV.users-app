import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingTextLocal: string | null = null;
  public isLoadingChange: EventEmitter<boolean>;
  public get isLoading(): boolean {
    return this.loadingCount > 0;
  }

  get loadingText(): string | null {
    return this.loadingTextLocal;
  }
  set loadingText(value: string | null) {
    this.loadingTextLocal = value;
  }

  private loadingCount: number;

  constructor() {
    this.isLoadingChange = new EventEmitter<boolean>();
    this.loadingCount = 0;
  }

  enableLoading() {
    this.loadingCount++;
    this.isLoadingChange.emit(this.isLoading);
  }

  disableLoading() {
    this.loadingCount--;
    this.isLoadingChange.emit(this.isLoading);
  }
}
