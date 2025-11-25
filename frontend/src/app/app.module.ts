import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'

@NgModule({ declarations: [AppComponent, MainComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
