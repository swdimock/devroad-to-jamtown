import { Component, Input } from '@angular/core';

@Component({
  selector: "app-character",
  templateUrl: "character.component.html",
  styleUrls: ["character.component.css"]
})
export class CharacterPartialComponent {
  @Input() character: {
    id: string;
    name: string;
    email: string;
    portrait: string;
  };
}
