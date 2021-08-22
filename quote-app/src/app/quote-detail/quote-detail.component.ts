import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input () quotes:any;
  @Output () isIncorrect = new EventEmitter<boolean>();

  quoteIncorrect(incorrect:boolean){
    this.isIncorrect.emit(incorrect)
  }
    constructor() { }

    ngOnInit(): void {
    }

}
