import { InputTextareaModule } from 'primeng/inputtextarea';
import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  FormArray,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';

// Constants
import FormInputsConstant from '../../../core/constants/request/inputs.constants';
import RequestModel from '@core/models/request.model';
import { RequestPickListComponent } from '@feautes/request/components/request-picklist/request-picklist.component';
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
    RequestPickListComponent,
  ],
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.css'],
})
export class FormRequestComponent implements OnInit {
  requestFormGroup: FormGroup;
  objectives: string[] = ['', ''];
  FORM_SECTIONS = FormInputsConstant.FORM_INPUTS;
  isModeRevision: boolean = false;

  @Input() modalVisible: boolean = false;

  @Input() currentRequest: RequestModel = {
    projectName: 'BMS new Project',
    requestDate: '23/23/23',
    baseline: 'i am testing the new implementation',
    objective: ['Build a Chiller plant with the best practices'],
    problemStatement: 'no hay',
    scope: 'si',
    outOfScope: 'fd',
    impact: 'dfa',
    stakeHolders: [
      {
        identificator: 'Stakeholder principal',
        name: 'ddsfgdf',
        role: 'Stakeholder principal',
        area: 'Stakeholder principal',
      },
      {
        identificator: 'Stakeholder principal',
        name: 'adsf',
        role: 'Stakeholder principal',
        area: 'Stakeholder principal',
      },
    ],
  };

  constructor(private _fB: FormBuilder) {
    this.requestFormGroup = this._fB.group({
      projectName: ['', Validators.required],
      requestDate: [
        { value: new Date().toLocaleString(), disabled: true },
        Validators.required,
      ],
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

  ngOnInit() {
    // Rellena currentRequest con valores vacios
    if (this.currentRequest) {
      this.isModeRevision = true;
      this.requestFormGroup.patchValue({
        projectName: this.currentRequest.projectName,
        requestDate: this.currentRequest.requestDate,
        baseline: this.currentRequest.baseline,
        problemStatement: this.currentRequest.problemStatement,
        scope: this.currentRequest.scope,
        outOfScope: this.currentRequest.outOfScope,
        impact: this.currentRequest.impact,
      });

      const objectiveArray = this.requestFormGroup.get(
        'objective'
      ) as FormArray;
      const currentRequestObjectives = this.currentRequest?.objective || [];
      this.clearFormArray(objectiveArray);
      this.createFormControls(objectiveArray, currentRequestObjectives);

      const stakeHoldersArray = this.requestFormGroup.get(
        'stakeHolders'
      ) as FormArray;
      const currentRequestStakeHolders =
        this.currentRequest?.stakeHolders || [];
      this.clearFormArray(stakeHoldersArray);
      this.createStakeHolderControls(
        stakeHoldersArray,
        currentRequestStakeHolders
      );

      this.requestFormGroup.disable();
    } else {
      this.isModeRevision = false;
    }
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

  onSubmit() {
    console.log(this.requestFormGroup.value);
  }

  // Helper method to clear existing controls in a FormArray
  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  // Helper method to create new form controls in a FormArray
  private createFormControls(formArray: FormArray, values: any[]) {
    values.forEach((value) => {
      formArray.push(this._fB.control(value, Validators.required));
    });
  }

  // Helper method to create stakeHolderGroup form controls in a FormArray
  private createStakeHolderControls(formArray: FormArray, values: any[]) {
    values.forEach((value) => {
      const stakeHolderGroup = this._fB.group({
        identificator: this._fB.control(
          value?.identificator,
          Validators.required
        ),
        name: this._fB.control(value?.name, Validators.required),
        role: this._fB.control(value?.role, Validators.required),
        area: this._fB.control(value?.area, Validators.required),
      });
      formArray.push(stakeHolderGroup);
    });
  }
  onModalClosed(isOpen: boolean) {
    this.modalVisible = isOpen;
  }
}
