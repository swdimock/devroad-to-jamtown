import { Component } from "@angular/core";

@Component({
  selector: "leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.css"]
})
export class LeaderBoardComponent {
  public title = "Leaderboard";

  public leaderboard = [
    {
      name: "Steve",
      date: "July 23, 2021",
      days: "10",
      portrait: "steve.png"
    },
    {
      name: "Nick",
      date: "July 22, 2021",
      days: "8",
      portrait: "nick.png"
    },
    {
      name: "Mike",
      date: "July 21, 2021",
      days: "7",
      portrait: "mike.png"
    }
  ];
}
