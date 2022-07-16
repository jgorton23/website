import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skills/skill/skill.component';
import { SingleExperienceComponent } from './experience/single-experience/single-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    HeaderComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    SkillComponent,
    SingleExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
