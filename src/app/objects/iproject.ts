export interface IReward{
    type: number;
    id: any;
    amount: number;
    count: number;
    investors: number;
    description: string;
    title: string;
    shares: number;
}

export interface IProject {
    
      id: any;
      title: string;
      description: string;
      image: string;
      maxAmount: number;
      curAmount: number;
      rewards: IReward[];
      TIR: number;
      summary: string;
      objective: string;
      team: string;
      strategy: string;
      characteristics: string;
}

export class Reward implements IReward {
  constructor(
    public type: number,
    public id: any,
    public amount: number,
    public count: number,
    public investors: number,
    public description: string,
    public title: string,
    public shares: number
  ) {  }    
}
export class Project implements IProject {
  constructor(
      public id: any,
      public title: string,
      public description: string,
      public image: string,
      public maxAmount: number,
      public curAmount: number,
      public rewards: IReward[],
      public TIR: number,
      public summary: string,
      public objective: string,
      public team: string,
      public strategy: string,
      public characteristics: string
  ) {  }    
}