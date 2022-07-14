import { Component, OnInit } from '@angular/core';

interface skill {
  skillName: string;
  years: number;
  level: number;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillsList: skill[] = [{skillName: "Java", years: 4, level: 5}];

}
