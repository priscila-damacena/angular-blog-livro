import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deslogado',
  standalone: true,
  imports: [],
  templateUrl: './deslogado.component.html',
  styleUrl: './deslogado.component.scss'
})
export class DeslogadoComponent implements OnInit {


  ngOnInit(): void {
    localStorage.clear();
  }

}
