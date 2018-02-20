import { Component, Input, AfterContentChecked } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css']
})
export class ValidationErrorsComponent implements AfterContentChecked {
@Input() checkErrors: FormControl;

private error: Array<string>;

  constructor() { }

  ngAfterContentChecked() {
    
    this.error = new Array<string>();
     for (let key in this.checkErrors.errors)
     {
         if (this.checkErrors.dirty){
           this.error.push(this.checkErrors.errors[key])
    
         }
     
      }
  }

}
