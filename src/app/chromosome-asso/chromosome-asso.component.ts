import {Component, HostBinding, OnInit} from '@angular/core';
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
  styleUrls: ['./chromosome-asso.component.css'],
})
export class ChromosomeAssoComponent implements OnInit {
  chromoForm: FormGroup;
  chromoSize: AbstractControl;
  populationSize: AbstractControl;
  maxEvolution: AbstractControl;
  threshold: AbstractControl;

  constructor(fb: FormBuilder) {
    this.chromoForm = fb.group({
      'chromoSize':  ['', Validators.compose([Validators.required, chromosomeValidator])],
      'populationSize': ['', Validators.compose([Validators.required, chromosomeValidator])],
      'maxEvolution': ['', Validators.compose([Validators.required])],
      'threshold': ['', Validators.compose([Validators.required])]
    });

    this.chromoSize = this.chromoForm.controls['classId'];
    this.populationSize = this.chromoForm.controls['classSize'];
    this.maxEvolution = this.chromoForm.controls['maxEvolution'];
    this.threshold = this.chromoForm.controls['threshold'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
