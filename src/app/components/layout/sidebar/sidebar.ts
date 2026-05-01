import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../Material.Module';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class Sidebar {
      // role = localStorage.getItem('role') || 'User';
   role = 'Agent'; // change manually for testing User,Agent
  adminOpen = true;
  agentOpen = true;
  userOpen = true;
}
