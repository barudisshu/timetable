import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

function chromosomeValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^(\d+)$/)) {
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
  chromoSize: AbstractControl;
  populationSize: AbstractControl;

  constructor(fb: FormBuilder) {
    this.chromoForm = fb.group({
      'chromoSize':  ['', Validators.compose([Validators.required, chromosomeValidator])],
      'populationSize': ['', Validators.compose([Validators.required, chromosomeValidator])]
    });

    this.chromoSize = this.chromoForm.controls['chromoSize'];
    this.populationSize = this.chromoForm.controls['populationSize'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
