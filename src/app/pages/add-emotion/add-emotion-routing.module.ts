import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmotionComponent } from './add-emotion.component';

const routes: Routes = [{ path: '', component: AddEmotionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmotionRoutingModule { }
