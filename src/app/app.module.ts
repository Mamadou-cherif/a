import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutComponent } from "./components/about/about.component"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component'
import {BlogComponent} from "./components/blog/blog.component"
import {FeedbackComponent} from "./components/feedback/feedback.component"
import {FooterComponent } from './components/footer/footer.component'
import {HomeComponent } from './components/home/home.component'
import {PortfolioComponent} from './components/portfolio/portfolio.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    FooterComponent,
    FeedbackComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
