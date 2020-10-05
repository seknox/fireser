
//
export type Job = {
  name: string;
  pageURL: string;
  tasks: Task[];
};

export type Task = {
  extractFunc: (htmlContent: string) => Promise;
  name: string;
  expectedValue: string;
  gotValue: string;
  fixURL: string;
};
