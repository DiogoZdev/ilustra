import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  /**
   * Component's theme
   */
  @Input() theme = '';

  /**
   * Form Data for name
   */
  public nameControl = '';

  /**
   * Form Data for email
   */
  public emailControl = '';

  /**
   * Form Data for phone
   */
  public phoneControl = '';

  /**
   * Form Data for sobject
   */
  public subjectControl = '';

  /**
   * Form Data for message
   */
  public messageControl = '';

  /**
   * URL to form
   */
  private formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfVTKGganaFw4kzs_PzYvIn3tTrjLfnRLZeVquP_waUcXKiIQ/formResponse';

  constructor(
    private http: HttpClient,
  ) { }

  sendForm() {
    this.trimForm();
    if(this.nameControl === ''
    || this.emailControl === ''
    || this.messageControl === ''
    ) return;

    const formData = `?entry.16864504=${encodeURI(this.nameControl)}&entry.1593608654=${encodeURI(this.emailControl)}&entry.693699108=${encodeURI(this.phoneControl)}&entry.1734069298=${encodeURI(this.subjectControl)}&entry.1334059281=${encodeURI(this.messageControl)}`;

    console.log(formData);
  }


  trimForm() {
    this.nameControl = this.nameControl.trim();
    this.emailControl = this.emailControl.trim();
    this.phoneControl = this.phoneControl.trim();
    this.messageControl = this.messageControl.trim();
  }
}
