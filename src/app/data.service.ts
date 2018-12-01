import { Injectable } from '@angular/core';
import {  Page1Component } from './page1/page1.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(page1 : Page1Component) { }
}
