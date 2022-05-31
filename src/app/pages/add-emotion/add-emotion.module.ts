import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

import { AddEmotionRoutingModule } from './add-emotion-routing.module';
import { AddEmotionComponent } from './add-emotion.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';

import { FormsModule } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';


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
    FormsModule,
    MatSliderModule
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
  ],
})
export class AddEmotionModule { }
