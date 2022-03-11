import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    let sign:Element | null = document.querySelector(".click-sign");
    let columnaBotones:any = document.querySelector(".links-container");

    columnaBotones.addEventListener("mouseenter", () =>{
      if (sign != null)
      sign.classList.add("active");
    });

    columnaBotones.addEventListener("mouseout", () =>{
      {
        if (sign != null)
        sign.classList.remove("active");
      }
    });
  }
}
