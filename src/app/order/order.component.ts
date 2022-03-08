import { Component } from '@angular/core';

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  title = 'counterNgState';
      navbar:any;
       sticky:any;
constructor() {
  window.onscroll =()=> this.myFunction();
  }
  ngOnInit() {
     this.navbar = document.getElementById("navbar");
     this.sticky = this.navbar.offsetTop;
  }

    myFunction() {
      if (window.pageYOffset >= this.sticky) {
        this.navbar.classList.add("sticky")
      } else {
        this.navbar.classList.remove("sticky");
      }
    }
}
