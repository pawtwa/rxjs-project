import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile$: Observable<any>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.profile$ = this.userService.getProfile();
  }

}
