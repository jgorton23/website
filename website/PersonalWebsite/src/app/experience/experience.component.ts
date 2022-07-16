import { Component, OnInit } from '@angular/core';
import { experience } from '../shared/experienceInterface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  // styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences: experience[] = [
    {
      jobTitle: "Full Stack Software Developer Intern",
      companyName: "Thinix",
      description: `At Thinix I developed code as an integral member of the development team. 
      I used C#, Angular, Typescript, and other tools to design, develop, test, and document 
      new features and services. I collaborated with other developers and used practices such
      as AGILE, TDD, DRY and more.`,
      start: new Date("2022-04-26"),
      end: new Date("2022-08-19")
    },
    {
      jobTitle: "Computer Science Teaching Assistant",
      companyName: "Iowa State University",
      description: `While working at Iowa State I helped teach hundreds of students the 
      fundamentals of Object Oriented Programming and basic data structures. I provided 
      assistance when students were writing programming projects in Java and held weekly 
      office hours where I was available to answer any computer science related questions`,
      start: new Date("2021-01-13"),
      end: new Date("2022-12-15")
    }
  ];

}
