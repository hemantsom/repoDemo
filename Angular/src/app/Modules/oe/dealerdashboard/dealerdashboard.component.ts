import { Component, OnInit, Inject } from '@angular/core';
import { SharedService } from 'app/shared/shared.service';
import { Router } from '@angular/router';
import { DealerMaster } from 'app/model/DealerMaster.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DealerMaster{
  dealerId: number;
  dealerName: string;
  dealerContactNo: string;
  dealerAddress: string;
  // //@OneToOne
  // @Column(name = "b_id")   // has a relation one to one foreign key from branch
  // private BranchMaster dealerBranchId;
  dealerAccountNo: string;
  dealerEmail: string;
  dealerStatus: string;
  dealerIFSCCode: string;
  dealerAccountType: string;
  dealerBankName: string;
}


@Component({
  selector: 'app-dealerdashboard',
  templateUrl: './dealerdashboard.component.html',
  styleUrls: ['./dealerdashboard.component.scss'],
})
export class DealerdashboardComponent implements OnInit {
  

  dealermaster: DealerMaster[];
  displayedColumns: string[] = ['dealerId', 'dealerName', 'dealerContactNo', 'dealerAddress', 'dealerAccountNo', 'dealerEmail', 'dealerStatus', 'dealerIFSCCode', 'dealerAccountType', 'dealerBankName'];

  constructor(private shared: SharedService, private router: Router, public dialog: MatDialog) { }

  

  ngOnInit() {
    console.log('hello dashboard');
    this.getAllData();
  }
  getAllData() {
    this.shared.getAllData().subscribe((data) => {
    
      this.dealermaster = data;
      console.log(this.dealermaster);
    }
    );
  }
  // openDialog() {
  //   this.dialog.open(DialogDataExampleDialog, {
  //     data: {
  //       animal: 'panda'
  //     }
  //   });
  // }

}

// @Component({
//   selector: 'addDealerData',
//   templateUrl: 'addDealerData.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
// }


