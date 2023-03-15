import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: "./contact-form.component.html",
  selector: "app-contact-form",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {

  public form!: FormGroup;

  constructor (
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required]
    })
  }
}