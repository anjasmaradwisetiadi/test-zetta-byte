import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CompanyStaffEditComponent} from './company-staff-edit/company-staff-edit.component';
import {CompanyStaffService} from './company-staff.service';

@Component({
  selector: 'app-company-staff',
  templateUrl: './company-staff.component.html',
  styleUrls: ['./company-staff.component.scss']
})
export class CompanyStaffComponent implements OnInit {

  constructor(public dialog: MatDialog, private companyStaffService: CompanyStaffService) { }

  ngOnInit(): void {
  }

  openDialogEdit(): void{
    this.dialog.open(CompanyStaffEditComponent, {
      width: '800px',
      data: {
        toggle: 'add'
      }
    });
  }

}
