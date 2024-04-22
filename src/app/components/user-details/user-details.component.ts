import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  username: string = '';
  userDetail: any;
  repo: any;
  constructor(
    private active: ActivatedRoute,
    private githubService: GithubService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.active.params.subscribe((params) => {
      this.username = params['id'];
      // this.repos = params['repos'];
    });
    this.githubService.getUser(this.username).subscribe({
      complete: () => {
        console.log('successfully done');
      },
      error: () => {
        alert('wrong user name');
        this.route.navigate(['search']);
      },
      next: (data: any = []) => {
        this.userDetail = data;
        console.log(this.userDetail);
      },
    });
    this.githubService.getUserRepos().subscribe((repo) => {
      console.log(repo);
      this.repo = repo;
    });
  }
}
