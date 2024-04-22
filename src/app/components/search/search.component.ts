import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  username!: string;
  searchForm!: FormGroup;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      username: new FormControl(''),
    });
  }
  sendUser() {
    this.username = this.searchForm.value.username;
    this.route.navigate([`user_details/${this.username}`]);
  }
}
