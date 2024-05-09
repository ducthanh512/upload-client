import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { UploadService } from './list/upload.service';
// UploaderServiceService } from '../services/uploader-service.service';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
  providers: [],
  exports: [ListComponent],
})
export class SharedModule {}
