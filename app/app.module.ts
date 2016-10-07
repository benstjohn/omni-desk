//imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
       FormsModule,
       BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
    
})

export class AppModule{

}
