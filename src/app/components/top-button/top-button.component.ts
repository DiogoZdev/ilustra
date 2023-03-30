import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-top-button',
    templateUrl: './top-button.component.html',
    styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent implements OnInit {

    private appWrapper = document.querySelector('#app-wrapper');

    public showButton = false;


    ngOnInit() {
        this.appWrapper!.addEventListener('scroll', () => {
            this.showButton = this.appWrapper!.scrollTop > 500;
        });
    }

    scrollToTop() {
        this.appWrapper!.scrollTo(0, 0);
    }

}