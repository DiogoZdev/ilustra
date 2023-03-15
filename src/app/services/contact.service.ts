import { Injectable } from "@angular/core";

interface IContactInfo {
  name: string,
  email: string,
  phone: string,
  message: string,
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfVTKGganaFw4kzs_PzYvIn3tTrjLfnRLZeVquP_waUcXKiIQ/formResponse";

  sendResponse(data: IContactInfo) {
    const { name, email, phone, message} = data;
    const formData = new FormData();

    formData.append("entry.16864504", name)
    formData.append("entry.1593608654", email)
    formData.append("entry.693699108", phone)
    formData.append("entry.1734069298", "Novo contato")
    formData.append("entry.1334059281", message)


    return fetch(this.formUrl, {
      method: "POST",
      body: formData
    }).then(() => {
      console.log("")
    }).finally(() => {
      return {
        message: "Mensagem enviada"
      }
    })
  }
}