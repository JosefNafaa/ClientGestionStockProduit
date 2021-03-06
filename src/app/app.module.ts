import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';
import { ChartModule } from 'angular2-chartjs';


//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import {ContentComponent} from './content/content.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule } from './app.routing.module';
import { ProduitService } from './produit/produit.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { XhrInterceptor } from './xhr.interceptor';
import { UserComponent } from './user/user.component';
import { CrudComponent } from './crud/crud.component';
import { principalReducer } from './shared/principal.reducer';
import { MyChartComponent } from './my-chart/my-chart.component';
import { UploadComponent } from './upload/upload.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent,
    MyChartComponent,
    UploadComponent,
    SampleComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer}),
    ChartModule
  ],
  providers: [ProduitMockService,
     ProduitService,
     AppService,
     { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
     CookieService,
     UserService]
     ,
  bootstrap: [AppComponent]
})
export class AppModule { }
