import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { emp } from './emp';
import { empd } from './emp.1';
import {
  FormGroup,  FormBuilder, FormArray, FormControl, } from '@angular/forms';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

  export class MainpageComponent implements OnInit {
    emps1:emp[]=[];
    emps:emp[]= [];
    emps2:emp[]= [];
    emps3:emp[]= [];
    emps4:emp[]= [];
  
    name : string="";
    selector:[]=[];
    
    public form: FormGroup | any;
  
    get changeFormArray(): FormArray {
      return this.form.get('change') as FormArray;
    }
    constructor(private sService: ServiceService,private formBuilder: FormBuilder ) {
      this.emps1=sService.getAll0();
      this.emps= sService.getAll();
      this.emps2= sService.getAll2();
      this.emps3= sService.getAll3();
      this.emps4= sService.getAll4();
  
  
      
    }
      ngOnInit() {
        this.form = this.formBuilder.group({
          
          change: this.formBuilder.array(this.emps2)
        });
      }
  
      drop(event: CdkDragDrop<empd[]>) {    
        if (event.container.id === 'emps2') {
          
          const newDoneItem = event.previousContainer.data[event.previousIndex];
          this.changeFormArray.insert(event.currentIndex, new FormControl(newDoneItem));
        } else if (event.container.id === 'emps3') {
          
          const removedItem = event.previousContainer.data[event.previousIndex];      
          const test = this.changeFormArray.value.findIndex((item: empd) => item === removedItem);
          this.changeFormArray.removeAt(test);
        }
        else if (event.container.id === 'emps4') {
        
          const removedItem = event.previousContainer.data[event.previousIndex];      
          const test = this.changeFormArray.value.findIndex((item: empd) => item === removedItem);
          this.changeFormArray.removeAt(test);
        }
        
  
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
    }
  
  
  
  }


