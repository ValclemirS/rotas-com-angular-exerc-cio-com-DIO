import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private para:ActivatedRoute,
    private nave:Router
  ) {
    this.para.firstChild?.params.subscribe(
      res => console.log(res)
    )
   }

  ngOnInit(): void {
    //setInterval(
     // ()=>this.nave.navigate(['/']),5000)
  }

}
