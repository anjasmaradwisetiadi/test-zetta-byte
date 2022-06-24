import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyStaffService} from '../company-staff.service';
import {StaffInterface} from '../staff.model';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-company-staff-edit',
  templateUrl: './company-staff-edit.component.html',
  styleUrls: ['./company-staff-edit.component.scss']
})
export class CompanyStaffEditComponent implements OnInit {

  dataStaff = {
    email: '',
    firstName: '',
    lastName: '',
    civility: 'MR',
    companyName: '',
    userType: '',
    userStatus: '',
    countDocument: 15
  };
  isValidEmail = false;
  buttonEmail = true;
  constructor(
    private companyStaffService: CompanyStaffService,
    private dialogRef: MatDialogRef<CompanyStaffEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }
  ngOnInit(): void {

    this.initForm();
  }

  collectForm(): string{
    const message = 'this.collect data';
    return message;
  }

  handleSave(): void{
    let uniqueId;
    if (this.data.toggle === 'edit'){
      uniqueId = this.data.editData.id;
    } else{
      uniqueId = Math.floor(Math.random() * 100);
    }

    const payload: StaffInterface = {
      id: uniqueId,
      email: this.dataStaff.email,
      civility: this.dataStaff.civility,
      first_name: this.dataStaff.firstName,
      last_name: this.dataStaff.lastName,
      company: {
        name: this.dataStaff.companyName,
        user_type: this.dataStaff.userType
      },
      user_status: 'active',
      count_document: 15
    };

    if (this.data.toggle === 'edit'){
      this.companyStaffService.editStaff(payload).subscribe(response => {
        this.companyStaffService.getStaff();
        this.dialogRef.close();
      });
    } else{
      this.companyStaffService.addStaff(payload).subscribe(response => {
        this.companyStaffService.getStaff();
        this.dialogRef.close();
      });
    }

  }
  initForm(): void{
    this.dataStaff.email = '';
    this.dataStaff.firstName = '';
    this.dataStaff.lastName = '';
    this.dataStaff.civility = 'MR';
    this.dataStaff.companyName = '';
    this.dataStaff.userType = '';
    this.dataStaff.userStatus = 'active';
    this.dataStaff.countDocument = 15;

    if (this.data.toggle === 'edit'){
      this.dataStaff.email = this.data.editData.email;
      this.dataStaff.firstName = this.data.editData.first_name;
      this.dataStaff.lastName = this.data.editData.last_name;
      this.dataStaff.civility = this.data.editData.civility;
      this.dataStaff.companyName = this.data.editData.company.name;
      this.dataStaff.userType = this.data.editData.company.user_type;
      this.dataStaff.userStatus = this.data.editData.user_status;
      this.dataStaff.countDocument = this.data.editData.count_document;
    }
  }

  handleValidateEmail(): void{
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.buttonEmail){
      this.isValidEmail = !!(this.dataStaff.email).match(validRegex);
      this.buttonEmail = false;
    } else{
      this.buttonEmail = true;
    }
  }
}
