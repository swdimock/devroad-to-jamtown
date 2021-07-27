import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { CharacterPartialComponent } from "./partials/character.component";
import { SelectionComponent } from "./pages/selection.component";
import { LeaderBoardComponent } from "./pages/leaderboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    CharacterPartialComponent,
    LeaderBoardComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CharacterPartialComponent,
    LeaderBoardComponent,
    SelectionComponent
  ]
})
export class AppModule {}
