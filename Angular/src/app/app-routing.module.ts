import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';  
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AccountComponent } from './account/account.component';
import { ProductComponent } from './product/product.component';
import { ErrorPage404Component } from './error-page404/error-page404.component';
import { CartComponent } from './cart/cart.component';


const router: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'products', component: ProductComponent},
	{path: 'products/:id', component: ProductDetailsComponent, data: {name: 'Oleg'}},
	{path: 'account', component: AccountComponent, children: [
		{path: '', redirectTo:'register', pathMatch: 'full'},
		{path: 'login', component: LoginFormComponent},
		{path: 'register', component: RegisterFormComponent}
	]},
	{path: 'cart', component: CartComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: '**', component: HomeComponent}
];

const routes = RouterModule.forRoot(router);

@NgModule({
    imports: [routes],
})
export class AppRoutingModule {}