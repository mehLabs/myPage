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

    let hugoText:any= document.querySelector("#hugo-text");
    let hugoY:string = hugoText.offsetTop;
    let hugoX:string = hugoText.offsetLeft;
    let root = document.documentElement;
    root.style.setProperty('--hugo-x',hugoX);
    root.style.setProperty('--hugo-y',hugoY);

    hugo.addEventListener("click", () => {
      this.hugoSignActive = !this.hugoSignActive;
    })
  }

}
