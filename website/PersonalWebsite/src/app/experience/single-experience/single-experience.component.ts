import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-experience',
  templateUrl: './single-experience.component.html',
  // styleUrls: ['./single-experience.component.css']
})
export class SingleExperienceComponent implements OnInit {

  @Input()
  jobTitle: string | undefined;

  @Input()
  companyName: string | undefined;

  @Input()
  desc: string | undefined;

  @Input()
  start: Date | undefined;

  @Input()
  end: Date | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public getWorkRangeString(): string{
    if(this.start === undefined){
      return "";
    }else if(this.end === undefined){
      return this.getMonthName(this.start) + " - Present";
    }else{
      if(this.start.getFullYear() === this.end.getFullYear()){
        return this.getMonthName(this.start) + " - " + this.getMonthName(this.end) + ", " + this.end.getFullYear();
      }else{
        return this.getMonthName(this.start) + ", " + this.start.getFullYear() + " - " + this.getMonthName(this.end) + ", " + this.end.getFullYear();
      }
    }
  }
  
  private getMonthName(date: Date): string{
    switch(date.getMonth()){
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6: 
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "";
    }
  }

}
