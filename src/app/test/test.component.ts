import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  getPosts() {
    this.dataService.getPostList().subscribe((res) => {
      console.log('res posts', res);
    })
  }

  getComments() {
    this.dataService.getComments().subscribe((res) => {
      console.log('res comments', res);
    })
  }
  

}
