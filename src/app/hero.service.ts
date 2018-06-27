import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
 
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
 
@Injectable({
  providedIn: 'root',
})
export class HeroService {
 
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }
 
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    const url = 'https://tastedive.com/api/similar?q=Harry+Potter&info=1&limit=4&k=311621-NextBing-Q67NK7EY';
    return this.http.get<Hero[]>(url);
  }
}
