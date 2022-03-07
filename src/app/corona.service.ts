//corona.services
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient){ }

  //to get data list for countries covid19api
  getCountries():Observable<any>{
    const url = "https://api.covid19api.com/countries" 
    return this.http.get<any>(url)
  }

  //to get total day one data by country covid19api
  getCoronaRealtimeData(country):Observable<any>{
    const url = "https://api.covid19api.com/total/dayone/country/"+ country  
    return this.http.get<any>(url)

  }

}
