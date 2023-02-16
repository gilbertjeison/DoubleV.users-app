import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  userName: string = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchUsers(){
    if(this.userName && this.userName.trim().length > 0){
      this.router.navigate(['/users/result-list/'+this.userName ]);
    }
  }

  clearData(){
    this.userName = '';
  }
}
