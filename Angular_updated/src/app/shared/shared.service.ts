import { Injectable } from '@angular/core';
import { DealerMaster } from 'app/model/DealerMaster.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8090";
  dealer:DealerMaster={

    dealerId: null,
    dealerName: '',
    dealerContactNo: '',
    dealerAddress: '',
    // //@OneToOne
    // @Column(name = "b_id")   // has a relation one to one foreign key from branch
    // private BranchMaster dealerBranchId;
    dealerAccountNo: '',
    dealerEmail: '',
    dealerStatus: '',
    dealerIFSCCode: '',
    dealerAccountType: '',
    dealerBankName: ''

  }
  
   getAllData():Observable<DealerMaster[]>
   {
     return this.http.get<DealerMaster[]>(this.url+'/'+'get');    
   }
  submitData(dealer: DealerMaster) {
    
     return this.http.post(this.url+'/'+'save', dealer);
    
   }
}
