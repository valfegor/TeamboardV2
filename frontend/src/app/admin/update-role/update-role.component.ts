import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css'],
})
export class UpdateRoleComponent implements OnInit {
  public roleData: any;
  public registerData: any;
  constructor(private _roleService: RoleService) {
    this.roleData = {};
    this.registerData = {};
  }

  ngOnInit(): void {
    this._roleService.listRole().subscribe((res) => {
      this.roleData = res.user;
      console.log(this.roleData);
    });
  }
}
