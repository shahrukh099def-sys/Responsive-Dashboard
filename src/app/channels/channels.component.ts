import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-channels',
  standalone: true,
  // 👇 You must import these for router directives to work
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent {
  // This property will track the active link
  activeLink: string = ''; // Initially no link is active

  // Method to set the active link
  setActive(link: string): void {
    this.activeLink = link; // Set clicked link as active
  }
}
