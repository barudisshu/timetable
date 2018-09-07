import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';

import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';

import { ExampleDef } from './example.model';
import { ChromosomeAssoComponent } from './chromosome-asso/chromosome-asso.component';
import { ClassgeneComponent } from './classgene/classgene.component';
import { GroupgeneComponent } from './groupgene/groupgene.component';
import { TeachergeneComponent } from './teachergene/teachergene.component';
import { LessongeneComponent } from './lessongene/lessongene.component';
import { TimegeneComponent } from './timegene/timegene.component';
import { EvolutionComponent } from './evolution/evolution.component';

/*
 * Here's the master list of our examples for this chapter.
 */
export const examples: ExampleDef[] = [
   {label: '介绍', name: 'Root', path: '', component: IntroComponent},
   {label: '种群基础', name: 'Chromosome', path: 'chromosome', component: ChromosomeAssoComponent},
   {label: '教室信息', name: 'ClassGene', path: 'classgene', component: ClassgeneComponent},
   {label: '班级信息', name: 'GroupGene', path: 'groupgene', component: GroupgeneComponent},
   {label: '课程信息', name: 'LessonGene', path: 'lessongene', component: LessongeneComponent},
   {label: '上课节数', name: 'TimeGene', path: 'timegene', component: TimegeneComponent},
   {label: '教师调配', name: 'TeacherGene', path: 'teachergene', component: TeachergeneComponent},
   {label: '进化', name: 'Evolution', path: 'evolution', component: EvolutionComponent}
];

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'chromosome', component: ChromosomeAssoComponent, pathMatch: 'full' },
  { path: 'classgene', component: ClassgeneComponent, pathMatch: 'full' },
  { path: 'groupgene', component: GroupgeneComponent, pathMatch: 'full' },
  { path: 'lessongene', component: LessongeneComponent, pathMatch: 'full' },
  { path: 'timegene', component: TimegeneComponent, pathMatch: 'full' },
  { path: 'teachergene', component: TeachergeneComponent, pathMatch: 'full' },
  { path: 'evolution', component: EvolutionComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent,
    ChromosomeAssoComponent,
    ClassgeneComponent,
    GroupgeneComponent,
    TeachergeneComponent,
    LessongeneComponent,
    TimegeneComponent,
    EvolutionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [
    { provide: APP_BASE_HREF,    useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs',    useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
