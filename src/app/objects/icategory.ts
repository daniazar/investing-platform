export interface ICategory {
    id?: number;
    title: string;
    description?: string;
}

export class Category implements ICategory {
  constructor(
    public title: string,
    public id?: number,
    public description?: string    
  ) {  }
}