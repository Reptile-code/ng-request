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
  requestFormGroup!: FormGroup;
  requestDate = '10/12/2023';
  objectives: string[] = ['', ''];
  FORM_SECTIONS = FormInputsConstant.FORM_INPUTS;
  ngOnInit() {
    this.requestFormGroup = new FormGroup({
      projectName: new FormControl('', [Validators.required]),
      baseline: new FormControl('', [Validators.required]),
      objective: new FormArray([], [Validators.required]),
      problemStatement: new FormControl('', [Validators.required]),
      scope: new FormControl('', [Validators.required]),
      outOfScope: new FormControl('', [Validators.required]),
      impact: new FormControl('', [Validators.required]),
      stakeHolders: new FormArray([], [Validators.required]),
      created: new FormControl('', [Validators.required]),
      updated: new FormControl('', [Validators.required]),
    });
    this.addObjective();
    this.addObjective();
  }

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
}
