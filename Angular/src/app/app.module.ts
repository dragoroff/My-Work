import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './app.material.module';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { AccountComponent } from './account/account.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CountryInfoComponent } from './country-info/country-info.component';

import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

import { ErrorPage404Component } from './error-page404/error-page404.component';

import { CountryService } from './shared/services/country.service';
import { BookServiceService } from './shared/services/book-service.service';
import { AccountService } from './shared/services/account.service';
import { CartService } from './shared/services/cart.service';

import { SlicerPipe } from './slicer-pipe.pipe';
import { ReplacerPipe } from './replacer.pipe';

import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';



@NgModule({

    imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		AppRoutingModule,
		ReactiveFormsModule,
		MaterialModule
	],

    declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		HomeComponent,
		FooterComponent,
		RegisterFormComponent,
		LoginFormComponent,
		CountryInfoComponent,
		DropdownComponent,
		ProductPreviewComponent,
		ProductDetailsComponent,
		AccountComponent,
		ProductComponent,
		ErrorPage404Component,
		SlicerPipe,
		ReplacerPipe,
		ValidationErrorsComponent,
		CartComponent
	],

	providers: [
		CountryService,
		BookServiceService,
		AccountService,
		CartService	
	],
    
    bootstrap: [AppComponent]
})
export class AppModule { }