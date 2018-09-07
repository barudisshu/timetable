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
  selector: 'app-classgene',
  templateUrl: './classgene.component.html',
  styleUrls: ['./classgene.component.css']
})
export class ClassgeneComponent implements OnInit {

  classForm: FormGroup;
  classId: AbstractControl;
  classSize: AbstractControl;

  constructor(fb: FormBuilder) {
    this.classForm = fb.group({
      'classId':  ['', Validators.compose([Validators.required, chromosomeValidator])],
      'classSize': ['', Validators.compose([Validators.required, chromosomeValidator])]
    });

    this.classId = this.classForm.controls['classId'];
    this.classSize = this.classForm.controls['classSize'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
