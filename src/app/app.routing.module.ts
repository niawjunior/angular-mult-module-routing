import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const secondaryRoutes: Routes = [
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(secondaryRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
