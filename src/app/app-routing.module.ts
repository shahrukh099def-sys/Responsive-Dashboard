import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { ChannelsComponent } from './channels/channels.component';
import { CustomComponent } from './channels/custom/custom.component';
import { M3UComponent } from './channels/m3-u/m3-u.component';
import { PlaylistChannelComponent } from './channels/playlist-channel/playlist-channel.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'reports', component: ReportsComponent },
      {
        path: 'channels',
        component: ChannelsComponent,
        children: [
          { path: 'playlist-channel', component: PlaylistChannelComponent },
          { path: 'custom', component: CustomComponent },
          { path: 'm3-u', component: M3UComponent },
          { path: '', redirectTo: 'playlist-channel', pathMatch: 'full' } // optional default
        ]
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
