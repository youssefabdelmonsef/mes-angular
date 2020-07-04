import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})

export class CounterComponent implements OnInit {

    @Input() finalNumber: number;
    @Input() nameText: any;
    @Input() counterTimeout;
    @Input() incrementStep = 1;
    @Input() heightClass;
    
    currentNumber = 0;

    ngOnInit() {
        this.incrementNumber(this.finalNumber);
    }

    incrementNumber(number) {
        if(this.currentNumber != this.finalNumber) {
            this.currentNumber += this.incrementStep;
            setTimeout(()=>{
                this.incrementNumber(this.currentNumber);
            },this.counterTimeout);
        }
    }

    resetCount() {
        this.currentNumber = 0;
        this.incrementNumber(this.finalNumber);
    }
}