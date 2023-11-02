interface Input {
  label?: string;
  name: string;
  placeholder: string;
  type: string;
  options?: string[];
}

interface Header {
  header: string;
}

interface si {
  sectionName: string;
  isTable: boolean;
  inputHeaders?: Header[];
  inputs: Input[];
}
export default class FormInputsConstant {
  static FORM_INPUTS: si[] = [
    {
      sectionName: 'Project Information',
      isTable: false,
      inputs: [
        {
          label: 'Baseline',
          name: 'baseline',
          placeholder: 'Enter Baseline',
          type: 'textarea',
        },
        {
          label: 'Objectives',
          name: 'objective',
          placeholder: 'Enter Objective',
          type: 'multipleInputs',
        },
        {
          label: 'Problem Statement',
          name: 'problemStatement',
          placeholder: 'Enter Problem Statement',
          type: 'textarea',
        },
        {
          label: 'Scope',
          name: 'scope',
          placeholder: 'Enter Scope',
          type: 'textarea',
        },
        {
          label: 'Out of Scope',
          name: 'outOfScope',
          placeholder: 'Enter Out of Scope',
          type: 'textarea',
        },
        {
          label: 'Impact',
          name: 'impact',
          placeholder: 'Enter Impact',
          type: 'textarea',
        },
      ],
    },
    {
      sectionName: 'Project Members',
      isTable: true,
      inputHeaders: [
        {
          header: 'Stakeholder identification',
        },
        {
          header: 'Name',
        },
        {
          header: 'Role',
        },
        {
          header: 'Area',
        },
      ],
      inputs: [
        {
          name: 'stakeHolders',
          placeholder: 'Select Identificator',
          type: 'dropdown',
          options: ['Stakeholder principal'],
        },
        {
          name: 'name',
          placeholder: 'Name',
          type: 'input',
        },
        {
          name: 'role',
          placeholder: 'Select a Role',
          type: 'dropdown',
        },
        {
          name: 'area',
          placeholder: 'Select an Area',
          type: 'dropdown',
        },
      ],
    },
  ];
}
