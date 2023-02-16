import { NgModule } from '@angular/core';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersService } from './services/users.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search-panel',
    pathMatch: 'full'
  },
  {
    path: 'search-panel',
    component: SearchPanelComponent
  },
  {
    path: 'result-list/:userName',
    component: ResultListComponent
  }
  ,
  {
    path: 'profile-detail/:userLogin',
    component: ProfileDetailComponent
  }
];

@NgModule({
  declarations: [
    SearchPanelComponent,
    ResultListComponent,
    ProfileDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
