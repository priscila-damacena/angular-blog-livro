import { Component } from '@angular/core';
import { NgbDropdownModule, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbDropdownModule,NgbCollapse,MatButtonModule,RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  collapsed = true;
}

