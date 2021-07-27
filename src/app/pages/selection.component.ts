import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "selection-quest",
  templateUrl: "./selection.component.html",
  styleUrls: ["./selection.component.css"]
})
export class SelectionComponent {
  public characters = [
    {
      id: "1",
      name: "Steve",
      email: "dimock@webbuy.com",
      portrait: "steve.png"
    },
    {
      id: "2",
      name: "Nick",
      email: "britton@webbuy.com",
      portrait: "nick.png"
    },
    {
      id: "3",
      name: "Mike",
      email: "ohman@webbuy.com",
      portrait: "mike.png"
    }
  ];

  public characterFormGroup = this.form.group({
    leader: this.form.group({
      characterId: this.form.control(""),
      tool: this.form.control("")
    }),
    lieutenant: this.form.group({
      characterId: this.form.control(""),
      tool: this.form.control("")
    }),
    lacky: this.form.group({
      characterId: this.form.control(""),
      tool: this.form.control("")
    })
  });

  // get getLeaderId() {
  // return this.characterFormGroup.get("member1").get("characterId");
  // }

  setFormGroupValue(event, value) {
    console.log(event);
    console.log(value);
  }

  getCharacterSelectedState(groupName: string, value: string): boolean {
    return (
      this.characterFormGroup.get(groupName).get("characterId").value === value
    );
  }

  constructor(private form: FormBuilder) {}
}
