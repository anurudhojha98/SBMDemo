import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app/contactmanager-app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
const routes: Routes = [
  {path:'contactmanager',component:ContactmanagerAppComponent},
  {path:'**',redirectTo:'contactmanager'}
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
  declarations: [ContactmanagerAppComponent, SidenavComponent, ToolbarComponent, MaincomponentComponent]
})
export class ContactmanagerModule { }
