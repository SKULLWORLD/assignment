import { Pipe, PipeTransform } from '@angular/core';
import { empd } from './components/mainpage/emp.1';

@Pipe({
  name: 'search1'
})
export class Search1Pipe implements PipeTransform {

  transform(Linda_May: empd[], name: string ) {
    if (Linda_May.length ===0 || name === ''){
      return Linda_May;
    } else{
      return Linda_May.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase())!== -1);
     
    }
    
  }

}
