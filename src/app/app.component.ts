import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherservice:WeatherService){}
  cityName:string='Udupi';
  weatherData?:WeatherData
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
    }
    onSubmit(){
      this.getWeatherData(this.cityName);
      this.cityName='';
    }
    private getWeatherData(cityName:string){
      this.weatherservice.getWeatherData(cityName).subscribe({
        next:(response)=>{
          this.weatherData=response;
          console.log(response);
        }
      });
    }
  
}
