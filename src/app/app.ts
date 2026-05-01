import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/layout/header/header";
import { MaterialModule } from "./Material.Module";
import { Sidebar } from "./components/layout/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MaterialModule, Sidebar],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('insurance-ui');
}
