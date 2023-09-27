import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  homeIcon:string = '../../../assets/icons8-home-48.png';
  linkedinIcon:string = '../../../assets/icons8-linkedin-50.png';
  githubIcon:string='../../../assets/icons8-github-50.png';

  constructor() { }

  ngOnInit(): void {
  }

}
