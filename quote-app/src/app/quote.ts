export class Quote {
  displayDescription:boolean;
  constructor(public id: number,public author: string,public message: string,public poster: string,public elapsedTime: Date){
    this.displayDescription= false;
  }
}

