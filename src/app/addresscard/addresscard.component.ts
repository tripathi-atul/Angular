import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-addresscard',
  templateUrl: './addresscard.component.html',
  styleUrls: ['./addresscard.component.css']
})
export class AddresscardComponent implements OnInit {
  
  @Input('user') user: User;
  isCollapsed: Boolean = true;

  constructor() { 

  }

  ngOnInit(): void {
  }
  
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;

  }

}
