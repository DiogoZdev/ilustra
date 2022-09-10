import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * Tema do componente
   */
  

  constructor() {}

  ngOnInit(): void {}

  sendMail() {
    const mailLink = document.createElement('a');
    mailLink.setAttribute("href", "mailto:araujoandressa2018@gmail.com");
    mailLink.setAttribute("target", "_blank");
    mailLink.click();
  }

  sendMessage() {
    const WhatsappLink = document.createElement('a');
    WhatsappLink.setAttribute("href", "https://wa.me/5543984827696");
    WhatsappLink.setAttribute("target", "_blank");
    WhatsappLink.click();
  }

}
