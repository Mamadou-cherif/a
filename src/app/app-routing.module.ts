import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./components/about/about.component"
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component'
import {BlogComponent} from "./components/blog/blog.component"
import {FeedbackComponent} from "./components/feedback/feedback.component"
import {FooterComponent } from './components/footer/footer.component'
import {HomeComponent } from './components/home/home.component'
import {PortfolioComponent} from './components/portfolio/portfolio.component'
const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"home", component:HomeComponent},
  {path:'feedback', component:FeedbackComponent},
  {path: "blog", component: BlogComponent},
  {path: "portfolio",component: PortfolioComponent},
  {path:"contact", component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
