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
  dealer:DealerMaster[];
  
   getAllData():Observable<DealerMaster[]>
   {
     return this.http.get<DealerMaster[]>(this.url+'/'+'get');    
   }
  submitData(dealer: DealerMaster) {
     return this.http.post(this.url, dealer);
   }

}
