import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserProfile } from '../models/user-profile';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  userProfile: UserProfile | undefined;
  followers: number = 0;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const userlogin = params.get('userLogin');
        return this.usersService.getUser(userlogin ?? '');
      })
    ).subscribe((res: UserProfile) => {
      this.userProfile = res;
      this.followers = res?.followers;
    } );
  }
}
