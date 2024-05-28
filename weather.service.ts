import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl="https://openweather43.p.rapidapi.com/weather";
  XRapidAPIHostHeaderName='X-RapidAPI-Host';
  XRapidAPIHeaderValue='openweather43.p.rapidapi.com';
  XRapidAPIKeyName='X-RapidAPI-Key';
  XRapidAPIKeyValue='7bf3e2d9b8msh07970085fd596c4p1bc6efjsnd51509319cfb';

  constructor(private http:HttpClient) { }
  
  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(this.baseUrl,{
    headers: new HttpHeaders().set(this.XRapidAPIHostHeaderName,this.XRapidAPIHeaderValue).set(this.XRapidAPIKeyName,this.XRapidAPIKeyValue),
    params:new HttpParams().set('q',cityName).set('units','standard')
    
    
  })
}

}
