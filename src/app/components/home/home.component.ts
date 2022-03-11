import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hugoSignActive:boolean=false;

  constructor() { }

  ngOnInit(): void {
    let hugo:any = document.querySelector("#hugo");
    let hugoSign:any=document.querySelector(".hugo-sign");

    hugo.addEventListener("click", () => {
      this.hugoSignActive = !this.hugoSignActive;
    })
  }

}
