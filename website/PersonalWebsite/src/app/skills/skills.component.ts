import { Component, OnInit } from '@angular/core';
import { skill } from '../shared/skillInterface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillsColOne: skill[] = [
    {skillName: "Java", years: 4, level: 5},
    {skillName: "Git", years: 5, level: 5},
    {skillName: "Python", years: 1, level: 4},
    {skillName: "SQL", years: 2, level: 4},
    {skillName: "C/C++", years: 2, level: 4},
    {skillName: "Docker", years: 1, level: 3},
    {skillName: "AWS Lambda", years: 1, level: 2},
  ];

  skillsColTwo: skill[] = [
    {skillName: "JavaScript", years: 3, level: 4},
    {skillName: "Angular", years: 1, level: 4},
    {skillName: "React Native", years: 1, level: 3},
    {skillName: "React.js", years: 1, level: 3},
    {skillName: "CSS", years: 5, level: 3},
    {skillName: "HTML", years: 5, level: 3},
  ]

}
