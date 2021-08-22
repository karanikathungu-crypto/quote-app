import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    new Quote(1,'MalcomX','Education is the passport to the future, for tomorrow belongs to those who prepare for it today.', 'James',new Date(1999,0,7)),
    new Quote(2,'RomeluLukaku','I do not dream i achieve.','Margaret',new Date(2010,6,7)),
    new Quote(3, 'NelsonMandela', 'The greatest glory in living lies not in never falling, but in rising every time we fall.','Julius',new Date(1969,6,4))

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
