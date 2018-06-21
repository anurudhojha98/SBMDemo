import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms'; 
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    SharedRoutingModule
  ],
  declarations: [ButtonsComponent]
})
export class SharedModule { }
