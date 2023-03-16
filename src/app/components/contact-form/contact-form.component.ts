import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "src/app/services/contact.service";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  templateUrl: "./contact-form.component.html",
  selector: "app-contact-form",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {

  public form!: FormGroup;
  public isMessageSent = false;

  constructor (
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(/^(?:\(?\d{2}\)?\s?)??(?:\s?\d{1}?\s?\d{3,5}\-?\s?\d{4})$/)]],
      email: ["", [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      message: ["", [Validators.required, Validators.maxLength(1000)]]
    })
  }

  sendFormResponse() {
  if (!this.form.valid) return;
  
   this.contactService.sendResponse(this.form.value).then((res) => {
    console.log(res)
   }).finally(() => {
    this.notifyMessageSent();
    this.clearForm()
   })
  }

  notifyMessageSent() {
    this.isMessageSent = true;
    setTimeout(() => {
      this.isMessageSent = false;
    }, 4000)
  }

  clearForm() {
    this.form.get('name')?.setValue("");
    this.form.get('phone')?.setValue("");
    this.form.get('email')?.setValue("");
    this.form.get('message')?.setValue("");
  }
}