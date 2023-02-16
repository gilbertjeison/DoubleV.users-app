import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserModel, UsersResponse } from '../models/user-model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  userName: string | null = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  displayedColumns: string[] = ['id', 'login', 'type', 'html_url', 'Opciones'];
  dataSource!: UserModel[];

  ngOnInit(
  ): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.userName = params.get('userName');
        return this.usersService.getUsers(this.userName ?? '');
      })
    ).subscribe((res: UsersResponse) => {
      this.dataSource = res.items.slice(0,10);
    } );
  }

  goToProfile(userName: string){
    if(userName){
      this.router.navigate(['/users/profile-detail/'+userName ]);
    }
  }

}
