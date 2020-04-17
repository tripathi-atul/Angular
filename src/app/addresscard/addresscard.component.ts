import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addresscard',
  templateUrl: './addresscard.component.html',
  styleUrls: ['./addresscard.component.css']
})
export class AddresscardComponent implements OnInit {
  
  user: any;
  @Input('name') userName: string;

  constructor() { 

  }

  ngOnInit(): void {
    this.user = {
      name: this.userName,
      address: 'pune',
      phone: [
        '123-435-654',
        '342-642-654'
      ]
    };
  }

}
