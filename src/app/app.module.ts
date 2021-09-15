import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { SharedModule } from './components/shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/shared/alert/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    MdbCheckboxModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    ErrorComponent, //no se porque esta aqui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
