import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import { ReactiveFormsModule } from '@angular/forms';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ 
    DishService,
    PromotionService,
    LeaderService ],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
