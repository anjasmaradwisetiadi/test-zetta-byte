import {Component, OnDestroy, OnInit} from '@angular/core';
import {StaffInterface} from '../staff.model';
import {CompanyStaffService} from '../company-staff.service';
import {Observable, Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CompanyStaffEditComponent} from '../company-staff-edit/company-staff-edit.component';
import {CompanyStaffDeleteComponent} from '../company-staff-delete/company-staff-delete.component';
import {filter, first, map} from 'rxjs/operators';

@Component({
  selector: 'app-company-staff-list',
  templateUrl: './company-staff-list.component.html',
  styleUrls: ['./company-staff-list.component.scss']
})
export class CompanyStaffListComponent implements OnInit, OnDestroy {
  private staffCollectSubs: Subscription;
  resultFilter = '';
  staffCollect: Array<StaffInterface> = [];
  loading = true;
  error = false;
  constructor(
    private companyStaffService: CompanyStaffService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.companyStaffService.getStaff();
    this.companyStaffService.filterStaffInfo.subscribe((filterVal) => {
      this.resultFilter = filterVal;
    });
    this.staffCollectSubs = this.fetchStaff();
  }

  ngOnDestroy(): void {
    this.staffCollectSubs.unsubscribe();
  }

  fetchStaff(): Subscription{
     return this.companyStaffService.staffInfo
      .pipe(
        map(datas => {
          return datas.filter((data) => {
            if (this.resultFilter.length){
              return data.user_status === this.resultFilter;
            }
            return data.user_status;
          });
        }),
      )
      .subscribe((response: Array<StaffInterface>) => {
        this.loading = false;
        this.error = false;
        this.staffCollect = response;
      }, (error) => {
        this.loading = false;
        this.error = true;
      });
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
