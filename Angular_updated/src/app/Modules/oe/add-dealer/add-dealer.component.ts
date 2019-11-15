import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'app/shared/shared.service';
import { DealerMaster } from 'app/model/DealerMaster.model';
 import { MatDialog, MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material'; 
import { DealerdashboardComponent } from '../dealerdashboard/dealerdashboard.component';
import { Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';
// import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.scss']
})
export class AddDealerComponent implements OnInit {

  constructor(private shared:SharedService, public dialogRef: MatDialogRef<AddDealerComponent>,private router:Router) {}

  ngOnInit() {
    this.shared.getAllData();

  }

  submitData(dealer:DealerMaster){

    console.log(dealer);
    
    this.shared.submitData(dealer).subscribe();
    this.onNoClick();
    
  }
  onNoClick(): void {
    
    this.dialogRef.close();
    this.router.navigateByUrl('role/oe/oedash');
    //this.router.navigate(["DealerdashboardComponent"]);
    
  }
  // rmControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
}
