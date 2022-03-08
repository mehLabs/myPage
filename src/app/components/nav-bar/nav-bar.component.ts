import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() sidebarClick = new EventEmitter();
  status:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    console.log("EMIT");
    this.sidebarClick.emit();
    this.status = !this.status;


  }
}
