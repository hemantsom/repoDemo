import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReDashboardComponent } from './re-dashboard/re-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
const rerouting: Routes = [
  { path: 'redash', component: ReDashboardComponent }
]

@NgModule({
  declarations: [ReDashboardComponent],
  imports: [
    CommonModule, RouterModule.forChild(rerouting)
  ],
  exports:[ReDashboardComponent]
})
export class REModule { }
