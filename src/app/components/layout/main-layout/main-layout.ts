import { Component } from '@angular/core';
import { MaterialModule } from "../../../Material.Module";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main-layout',
  imports: [MaterialModule, RouterModule],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss'],
})
export class MainLayout {

  

}
