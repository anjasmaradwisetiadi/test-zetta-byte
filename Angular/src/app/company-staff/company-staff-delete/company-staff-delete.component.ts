import {Component, Inject, OnInit} from '@angular/core';
import {CompanyStaffService} from '../company-staff.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-company-staff-delete',
  templateUrl: './company-staff-delete.component.html',
  styleUrls: ['./company-staff-delete.component.scss']
})
export class CompanyStaffDeleteComponent implements OnInit {

  constructor(
    private companyStaffService: CompanyStaffService,
    private dialogRef: MatDialogRef<CompanyStaffDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

  handleDelete(): void{
    this.companyStaffService.deleteStaff(this.data.deleteData.id).subscribe(response => {
      this.companyStaffService.getStaff();
      this.dialogRef.close();
    });
  }

}
