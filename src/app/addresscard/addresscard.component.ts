import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addresscard',
  templateUrl: './addresscard.component.html',
  styleUrls: ['./addresscard.component.css']
})
export class AddresscardComponent implements OnInit {
  
  user: any;

  constructor() { 

    this.user = {
      name: 'phone-bar',
      address: 'pune',
      phone: [
        '123-435-654',
        '342-642-654'
      ]
    };
  }

  ngOnInit(): void {
  }

}
