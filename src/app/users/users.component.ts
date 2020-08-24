import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<any> = [];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe((resp: any) => {
      this.users = resp['data'];
      console.log(this.users);
    });
  }

  ngOnInit(): void {
  }

}
