import { Component, OnInit } from '@angular/core';
import { formatMessage } from 'devextreme/localization';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  formatMessage = formatMessage;
  constructor() { }

  ngOnInit() {
  }

}
