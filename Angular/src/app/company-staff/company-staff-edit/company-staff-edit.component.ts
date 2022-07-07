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
    position: '',
    officePhone: '',
    directLine: '',
    mobilePhone: '',
    civility: 'MR',
    companyName: '',
    userType: '',
    userStatus: '',
    countDocument: 15,
  };
  isValidEmail = false;
  buttonEmail = true;

  formGroupStaff: FormGroup;
  constructor(
    private companyStaffService: CompanyStaffService,
    private dialogRef: MatDialogRef<CompanyStaffEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }
  ngOnInit(): void {
    this.initForm();
  }

  handleSave(): void{
    let uniqueId;
    if (this.data.toggle === 'edit'){
      uniqueId = this.data.editData.id;
    } else{
      uniqueId = Math.floor(Math.random() * 100);
    }

    this.handleValidateEmail();

    const idPayload = {
      id : uniqueId
    };
    const payload = {
      ...this.formGroupStaff.value, ...idPayload
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
    this.dataStaff.position = '';
    this.dataStaff.officePhone = '';
    this.dataStaff.directLine = '';
    this.dataStaff.mobilePhone = '';
    this.dataStaff.civility = 'MR';
    this.dataStaff.companyName = '';
    this.dataStaff.userType = '';
    this.dataStaff.userStatus = 'active';
    this.dataStaff.countDocument = 15;

    if (this.data.toggle === 'edit'){
      this.dataStaff.email = this.data.editData.email;
      this.dataStaff.firstName = this.data.editData.first_name;
      this.dataStaff.lastName = this.data.editData.last_name;
      this.dataStaff.position = this.data.editData.position;
      this.dataStaff.officePhone = this.data.editData.office_phone;
      this.dataStaff.directLine = this.data.editData.direct_line;
      this.dataStaff.mobilePhone = this.data.editData.mobile_phone;
      this.dataStaff.civility = this.data.editData.civility;
      this.dataStaff.companyName = this.data.editData.company.name;
      this.dataStaff.userType = this.data.editData.company.user_type;
      this.dataStaff.userStatus = this.data.editData.user_status;
      this.dataStaff.countDocument = this.data.editData.count_document;
    }

    this.formGroupStaff = new FormGroup({
      email: new FormControl(this.dataStaff.email, Validators.required),
      civility: new FormControl(this.dataStaff.civility, Validators.required),
      first_name: new FormControl(this.dataStaff.firstName, Validators.required),
      last_name: new FormControl(this.dataStaff.lastName),
      company: new FormGroup({
        name: new FormControl(this.dataStaff.companyName, Validators.required),
        user_type: new FormControl(this.dataStaff.directLine, Validators.required)
      }),
      user_status: new FormControl(this.dataStaff.userStatus, Validators.required) ,
      count_document: new FormControl(this.dataStaff.countDocument, Validators.required),
      position: new FormControl(this.dataStaff.position),
      office_phone: new FormControl(this.dataStaff.officePhone),
      direct_line: new FormControl(this.dataStaff.directLine),
      mobile_phone: new FormControl(this.dataStaff.mobilePhone),
    });
  }

  handleValidateEmail(): void{
    this.buttonEmail = true;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.buttonEmail){
      this.isValidEmail = !!(this.dataStaff.email).match(validRegex);
      this.buttonEmail = false;
    } else{
      this.buttonEmail = true;
    }
  }
}
