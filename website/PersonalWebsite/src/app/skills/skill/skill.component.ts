import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input()
  level: number | undefined;
  
  constructor() { }

  showDetails: boolean = false;

  ngOnInit(): void {
  }

  onClick(){
    this.showDetails = !this.showDetails;
  }
}
