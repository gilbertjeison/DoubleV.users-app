import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from '../../../../environments/environment';
import { UsersResponse } from '../models/user-model';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService: HttpService) { }

  getUsers(
    userName: string
  ): Observable<UsersResponse> {
    return this.httpService.get(
      `${environment.usersApiUrl}${userName}`
    );
  }

  getUser(
    userName: string
  ): Observable<UserProfile> {
    return this.httpService.get(
      `${environment.userApiUrl}${userName}`
    );
  }
}
