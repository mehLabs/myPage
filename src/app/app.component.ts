import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  leftColumn:Element | null = null;
  title:string = 'hugoiturrieta';
  wider:boolean=false;


  ngOnInit(): void {
    
   this.leftColumn = document.querySelector("#nav-column");


   

  }
  toggleSidebarWidth(){
    console.log(this.leftColumn);
    if(this.wider==false && this.leftColumn != null){
      this.leftColumn.classList.remove("narrow");
      this.leftColumn.classList.add("wider");
      this.wider=true;
    }else if(this.wider==true && this.leftColumn != null){
      this.leftColumn.classList.add("narrow");
      this.leftColumn.classList.remove("wider");
      this.wider=false;
    }


  }
}


  