import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PracticeServService } from '../pms/practice-serv.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router , private pracServ :PracticeServService) { }
  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};
  

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  practiceList = new Array();
  recordStatus = false;
  ngOnInit() {
    this.pracServ.getPracticeList().subscribe(res=>{
      console.log('Res oninit:',res);
      if( res['response']['data']['practices']){
        this.practiceList = res['response']['data']['practices'];
        console.log('Navbar:',this.practiceList);
        this.recordStatus = true;
      }else{
        this.recordStatus = false;
      }
    },
  err=>{
    this.recordStatus = false;
  });
  }
  logout(){
    console.log('inside logout');
    localStorage.clear();
    this.router.navigate(['']);
  }

}
