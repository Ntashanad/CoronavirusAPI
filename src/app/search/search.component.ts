//search.component.ts
import { Component } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [CoronaService]
})
export class SearchComponent {

	//this is variables
  countries:any
	country:any
  confirmed!: Number;
  //recovered!: Number;
  deaths!: Number;

  constructor(private corona:CoronaService) { }

  ngOnInit(){
	//this methode to load list of countries data from database
    this.corona.getCountries().subscribe((data)=>{
		console.log(data)
		this.countries = data
      })
   }

//this methode to load data current time from database  
getCoronaData(){
    this.corona.getCoronaRealtimeData(this.country).subscribe((data)=>{
      console.log(data)
      var index = data.length - 1
      console.log(index)
      this.confirmed = data[index].Confirmed
      //this.recovered = data[index].Recovered
      this.deaths = data[index].Deaths
    })
  }

  //this the methode where it hold to get data selected by any country  
  getCountry(country:any){
	this.country = country
  }

}
