import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') applicationTitle?: ElementRef;

  title = 'shop';

  ngAfterViewInit(): void {
    if (this.applicationTitle) {
      this.applicationTitle.nativeElement.innerText = 'Shop application';
    }
  }
}
