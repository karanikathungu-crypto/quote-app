import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):number{
    let today: Date = new Date();
    let todayWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithoutTime)
    const secondsEachDay = 86400;
    var dateDifferenceInSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceInSeconds/secondsEachDay;

    if(dateCounter >= 1 && value < todayWithoutTime){
      return dateCounter;
    }
    else{
      return 0;
        }
    }

  
  }

