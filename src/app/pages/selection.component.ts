import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';

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
      characterId: this.form.control("", Validators.required),
      tool: this.form.control("")
    }),
    lieutenant: this.form.group({
      characterId: this.form.control("", Validators.required),
      tool: this.form.control("")
    }),
    lacky: this.form.group({
      characterId: this.form.control("", Validators.required),
      tool: this.form.control("")
    })
  });

  getFormGroupValue(event) {
    return this.characterFormGroup.get(event);
  }

  isFormCharacterSet(event) {
    return !!this.characterFormGroup.get(event).get("characterId").value;
  }

  getCharacterFromFormId(event) {
    return this.characters.find((character) => {
      // @ts-ignore
      return character.id === this.getFormGroupValue(event).value?.characterId;
    })
  }

  setFormGroupValue(event, value) {
    this.characterFormGroup.get(event).get("characterId").patchValue(value);
  }

  getCharacterSelectedState(groupName: string, value: string): boolean {
    return (
      this.characterFormGroup.get(groupName).get("characterId").value === value
    );
  }

  constructor(private form: FormBuilder) {}
}
