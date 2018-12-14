import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Imported DatePicker button from ej2-angular-calendars package
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    //Registering DateRangePicker Module 
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
