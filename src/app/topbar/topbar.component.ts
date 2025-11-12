import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  toggleSidebarHandler() {
    this.toggleSidebar.emit();
  }
}
