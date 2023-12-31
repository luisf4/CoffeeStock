import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StocksPageComponent } from './stocks/stocks-page/stocks-page.component';
import { SearchStocksComponent } from './stocks/search-stocks/search-stocks.component';
import { AuthService } from './auth/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './stocks/home/home.component';
import { NavbarComponent } from './stocks/navbar/navbar.component';
import { ChartsComponent } from './stocks/charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NavbarUpComponent } from './stocks/navbar-up/navbar-up.component';
import { FooterComponent } from './stocks/footer/footer.component';
import { StockService } from './stocks/stocks-page/stock.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { PortfolioComponent } from './stocks/portfolio/portfolio.component';
import { PortfolioItemComponent } from './stocks/portfolio-item/portfolio-item.component';
import { AboutComponent } from './stocks/about/about.component';
import { ChartDonutComponent } from './stocks/chart-donut/chart-donut.component';
import { ChartBarComponent } from './stocks/chart-bar/chart-bar.component';
import { FavoritesComponent } from './stocks/favorites/favorites.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StocksPageComponent,
    SearchStocksComponent,
    HomeComponent,
    NavbarComponent,
    ChartsComponent,
    NavbarUpComponent,
    FooterComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    AboutComponent,
    ChartDonutComponent,
    ChartBarComponent,
    FavoritesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgxPaginationModule,
  ],
  providers: [AuthService,StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
