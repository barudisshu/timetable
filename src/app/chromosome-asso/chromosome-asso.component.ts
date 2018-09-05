import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidChromo: true};
  }
}


@Component({
  selector: 'app-chromosome-asso',
  templateUrl: './chromosome-asso.component.html',
  styles: []
})
export class ChromosomeAssoComponent implements OnInit {
  chromoForm: FormGroup;
  chromo: AbstractControl;

  constructor(fb: FormBuilder) {
    this.chromoForm = fb.group({
      'chromo':  ['', Validators.compose([
        Validators.required, skuValidator])]
    });

    this.chromo = this.chromoForm.controls['chromo'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
