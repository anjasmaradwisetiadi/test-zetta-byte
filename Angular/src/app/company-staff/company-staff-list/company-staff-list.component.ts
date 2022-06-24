import {Component, OnDestroy, OnInit} from '@angular/core';
import {StaffInterface} from '../staff.model';
import {CompanyStaffService} from '../company-staff.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CompanyStaffEditComponent} from '../company-staff-edit/company-staff-edit.component';
import {CompanyStaffDeleteComponent} from '../company-staff-delete/company-staff-delete.component';


@Component({
  selector: 'app-company-staff-list',
  templateUrl: './company-staff-list.component.html',
  styleUrls: ['./company-staff-list.component.scss']
})
export class CompanyStaffListComponent implements OnInit, OnDestroy {
  private staffCollectSubs: Subscription;
  staffCollect: Array<StaffInterface> = [];
  loading = true;
  error = false;
  constructor(
    private companyStaffService: CompanyStaffService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.companyStaffService.getStaff();

    this.staffCollectSubs = this.companyStaffService.staffInfo.subscribe((response: any) => {
      this.staffCollect = response;
      this.loading = false;
      this.error = false;
    }, (error) => {
      this.loading = false;
      this.error = true;
    });
  }

  ngOnDestroy(): void {
    this.staffCollectSubs.unsubscribe();
  }
  handleEdit(payload: StaffInterface): void{
    this.dialog.open(CompanyStaffEditComponent, {
      width: '800px',
      data: {
        toggle: 'edit',
        editData: payload
      }
    });
  }

  hanldeDelete(payload): void{
    this.dialog.open(CompanyStaffDeleteComponent, {
      width: '600px',
      data: {
        toggle: 'delete',
        deleteData: payload
      }
    });
  }


}
