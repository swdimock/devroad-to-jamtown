import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LeaderBoardComponent } from "./pages/leaderboard.component";
import { SelectionComponent } from "./pages/selection.component";

const routes: Routes = [
  { path: "leaderboard", component: LeaderBoardComponent },
  { path: "", component: SelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
