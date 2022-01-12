import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleCreationComponent} from "./article-creation/article-creation.component";
import {StatsComponent} from "./stats/stats.component";
import {OverviewComponent} from "./overview/overview.component";
import {ArticleComponent} from "./article/article.component";
import {PayoutComponent} from "./payout/payout.component";

const routes: Routes = [
  { path: 'article-creation', component: ArticleCreationComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'payout', component: PayoutComponent },
  { path: 'article/:id', component: ArticleComponent},
  { path: '', redirectTo:'overview',pathMatch: 'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
