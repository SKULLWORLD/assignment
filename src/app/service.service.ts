import { Injectable } from '@angular/core';
import { emp_details, Joe_Linux, Jogn_Green, Linda_May, Mark } from './components/mainpage/data';
import { emp } from './components/mainpage/emp';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
  getAll0():emp[]{
    return Mark;
  }

  getAll():emp[]{
    return emp_details;
  }
  getAll2():emp[]{
    return Joe_Linux;
  }
  getAll3():emp[]{
    return Linda_May;
  }
  getAll4():emp[]{
    return Jogn_Green;
  }
}
