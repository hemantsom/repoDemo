import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OEDashboardComponent } from './oedashboard/oedashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DealerdashboardComponent} from './dealerdashboard/dealerdashboard.component';
import { MasterComponent } from './master/master.component';
import {MatSort} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { SubdealerdashboardComponent } from './subdealerdashboard/subdealerdashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


const oerouting: Routes = [
  { path: 'oedash', component: OEDashboardComponent },
  { path: 'dealerdash', component: DealerdashboardComponent },
  { path: 'masterdash', component: MasterComponent },
  { path: 'subdealerdash', component: SubdealerdashboardComponent },
]


@NgModule({
  declarations: [OEDashboardComponent, DealerdashboardComponent, MasterComponent, SubdealerdashboardComponent, AddDealerComponent],
  entryComponents: [AddDealerComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(oerouting,)
  ],
  exports: [OEDashboardComponent,DealerdashboardComponent,MasterComponent,SubdealerdashboardComponent,AddDealerComponent]
})
export class OEModule { }
