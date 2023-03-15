import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "src/app/services/contact.service";

@Component({
  templateUrl: "./contact-form.component.html",
  selector: "app-contact-form",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {

  public form!: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      phone: [null, Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required]
    })
  }

  // TO DO: improve communication with forms through script.google to avoid CORS error.
  // FACT: the form is functional even throwing CORS error
  sendFormResponse() {
    if (this.form.invalid) return;

   this.contactService.sendResponse(this.form.value).then((res) => {
    console.log(res)
   }).finally(() => {
    alert('Mensagem enviada');
    this.form.reset()
   })
  }
}