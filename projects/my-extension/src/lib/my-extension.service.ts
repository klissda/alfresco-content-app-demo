import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyExtensionService {
  mySmartViewerEnabled() {
    return true;
  }

  constructor() { }
}
