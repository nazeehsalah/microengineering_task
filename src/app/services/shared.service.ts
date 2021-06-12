import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public breadcrumbText = " Wonderful Movie App "
  hideloading: boolean = true
  constructor() { }
}
