import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmotionRoutingModule } from './add-emotion-routing.module';
import { AddEmotionComponent } from './add-emotion.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmotionComponent
  ],
  imports: [
    CommonModule,
    AddEmotionRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class AddEmotionModule { }
