import { Component, OnInit } from '@angular/core';

/**
 * template 和 templateUrl 二选一
 */
@Component({
  selector: 'app-hello-world',
  template: `<p>Hello-world works inline!</p>`,
  // templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
