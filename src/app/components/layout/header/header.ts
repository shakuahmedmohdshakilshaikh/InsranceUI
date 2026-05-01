import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from "../../../Material.Module";

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  @Output() toggle =  new EventEmitter<void>();

   logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}
