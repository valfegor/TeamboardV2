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
  public roleDescription: any;
  constructor(private _roleService: RoleService) {
    this.roleData = [];
    this.registerData = {};
    this.roleDescription={};
  }

  ngOnInit(): void {
    this._roleService.listRole().subscribe((res) => {
      this.roleData = res.role;
      console.log(this.roleData);
      for (const iterator of this.roleData) {
          this.roleDescription=iterator.description;
          console.log(this.roleDescription)
      }
    });
  }
}
