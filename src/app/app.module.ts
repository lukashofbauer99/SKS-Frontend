import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleCreationComponent} from './article-creation/article-creation.component';
import {OverviewComponent} from './overview/overview.component';
import {ArticleComponent} from './article/article.component';
import {StatsComponent} from './stats/stats.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {PayoutComponent} from './payout/payout.component';
import {NgxEchartsModule} from "ngx-echarts";
import {PieChartComponent} from './charts/pie-chart/pie-chart.component';
import {BarChartComponent} from './charts/bar-chart/bar-chart.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ArticleCreationComponent,
    OverviewComponent,
    ArticleComponent,
    StatsComponent,
    PayoutComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  exports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
