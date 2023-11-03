import { InputTextareaModule } from 'primeng/inputtextarea';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  FormArray,
  ReactiveFormsModule,
  Validators,
  ControlContainer,
  FormGroupDirective,
  FormBuilder,
} from '@angular/forms';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';

// Constants
import FormInputsConstant from '../../../core/constants/form-request/inputs.constants';
@Component({
  selector: 'app-form-request',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    ButtonModule,
    DropdownModule,
    ScrollPanelModule,
  ],
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.css'],
})
export class FormRequestComponent implements OnInit {
  requestFormGroup: FormGroup;
  requestDate = '10/12/2023';
  objectives: string[] = ['', ''];
  FORM_SECTIONS = FormInputsConstant.FORM_INPUTS;

  constructor(private _fB: FormBuilder) {
    this.requestFormGroup = this._fB.group({
      projectName: ['', Validators.required],
      baseline: ['', Validators.required],
      objective: this._fB.array(
        [
          this._fB.control('', Validators.required),
          this._fB.control('', Validators.required),
        ],
        Validators.required
      ),
      problemStatement: ['', Validators.required],
      scope: ['', Validators.required],
      outOfScope: ['', Validators.required],
      impact: ['', Validators.required],
      stakeHolders: this._fB.array(
        [
          this._fB.group({
            identificator: this._fB.control('', Validators.required),
            name: this._fB.control('', Validators.required),
            role: this._fB.control('', Validators.required),
            area: this._fB.control('', Validators.required),
          }),
        ],
        Validators.required
      ),
    });
  }

  ngOnInit() {}

  get objectiveFormArray() {
    return this.requestFormGroup.get('objective') as FormArray;
  }

  get stakeHoldersFormArray() {
    return this.requestFormGroup.get('stakeHolders') as FormArray;
  }

  addStakeHolder() {
    this.stakeHoldersFormArray.push(
      new FormGroup(
        {
          identificator: new FormControl('', Validators.required),
          name: new FormControl('', Validators.required),
          role: new FormControl('', Validators.required),
          area: new FormControl('', Validators.required),
        },
        Validators.required
      )
    );
  }

  removeStakeholder(index: number) {
    this.stakeHoldersFormArray.removeAt(index);
  }

  addObjective() {
    this.objectiveFormArray.push(new FormControl('', Validators.required));
  }

  removeObjective(index: number) {
    this.objectiveFormArray.removeAt(index);
  }

  onSubmit() {
    console.log(this.requestFormGroup.value);
  }
}
