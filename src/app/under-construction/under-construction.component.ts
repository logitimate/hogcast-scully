import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="d-flex align-items-center justify-content-center bg-dark construction-container">
    <div>
    <img src="/assets/logo.png" alt="The Hogcast Logo">
     <h2 class="text-center text-white">Under Construction!</h2>
    </div>
  </div>
  `,
  styles: [
    `
    .construction-container{
      height:90vh;
    }`
  ]
})
export class UnderConstructionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
