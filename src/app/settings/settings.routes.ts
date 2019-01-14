
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { NgModule } from '@angular/core';

export const SETTINGS_ROUTES: Routes = [
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(SETTINGS_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule { }
