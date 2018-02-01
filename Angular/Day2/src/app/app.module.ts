import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PipesPipe } from './pipes.pipe';
import { PizzaService } from './services.service'

@NgModule({
  declarations: [
    AppComponent,
    PeopleInfoComponent,
    HeaderComponent,
    FooterComponent,
    PizzaListComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
