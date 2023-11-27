export const REQUEST_TITLES = (key: string): string => {
  const keyMappings: { [key: string]: string } = {
    baseline: 'Baseline',
    objective: 'Objective',
    problemStatement: 'Problem Statement',
    scope: 'Scope',
    outOfScope: 'Out of Scope',
    impact: 'Impact',
    projectDescription: 'Project Description',
    projectType: 'Project Type',
  };

  return keyMappings[key] || '';
};
