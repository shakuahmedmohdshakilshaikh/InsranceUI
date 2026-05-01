import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Payment {

  private apiurl = `${environment.apiUrl}payment`

  constructor(private http : HttpClient){}

  getPendingPayment() : Observable<any>{
    return this.http.get<any>(`${this.apiurl}/cash/pending`);
  }
  verifyCashPayment(paymentId:any) : Observable<any>{
    return this.http.put<any>(`${this.apiurl}/cash/verify/${paymentId}`,{});
  }

 rejectCashPayment(paymentId: any, remarks: string): Observable<any> {
  return this.http.put<any>(`${this.apiurl}/cash/reject/${paymentId}`, {
    remarks: remarks
  });
}

 getAllPayments(): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/all`);
  }

  getPaymentsByPolicyId(policyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/policy/${policyId}`);
  }

  getPaymentsByPremiumId(premiumScheduleId: number): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/premium/${premiumScheduleId}`);
  }

  getPaymentById(paymentId: number): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/${paymentId}`);
  }


}
