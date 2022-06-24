import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyStaffComponent } from './company-staff/company-staff.component';
import { CompanyStaffEditComponent } from './company-staff/company-staff-edit/company-staff-edit.component';
import { CompanyStaffDetailComponent } from './company-staff/company-staff-detail/company-staff-detail.component';
import { CompanyStaffListComponent } from './company-staff/company-staff-list/company-staff-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { CompanyStaffDeleteComponent } from './company-staff/company-staff-delete/company-staff-delete.component';
import { LoadingComponent } from './component/loading/loading.component';
import { ErrorComponent } from './component/error/error.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    CompanyStaffComponent,
    CompanyStaffEditComponent,
    CompanyStaffDetailComponent,
    CompanyStaffListComponent,
    CompanyStaffDeleteComponent,
    LoadingComponent,
    ErrorComponent
  ],
  entryComponents: [
    CompanyStaffEditComponent,
    CompanyStaffDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
