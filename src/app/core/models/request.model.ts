import Stakeholder from '@feautes/request/models/stakeholder.model';

export default interface RequestModel {
  projectName: string;
  requestDate: string;
  baseline: string;
  objective: string[];
  problemStatement: string;
  scope: string;
  outOfScope: string;
  impact: string;
  stakeHolders: Stakeholder[];
}
