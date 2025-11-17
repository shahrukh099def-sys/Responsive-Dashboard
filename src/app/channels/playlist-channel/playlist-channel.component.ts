import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-playlist-channel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DragDropModule, ToggleButtonModule],
  templateUrl: './playlist-channel.component.html',
  styleUrls: ['./playlist-channel.component.scss']
})
export class PlaylistChannelComponent implements OnInit {

  playlistForm!: FormGroup;
  queuedVideos: any[] = [];
  showLogo: boolean = true;
  logoOnRight: boolean = false;
  showSidebar = false;
  activeTab: string | null = null;

  images: string[] = [
    "https://dev.nowcast.cc/image-service/api/v1/upload/load/7451?height=150&width=150",
    "https://dev.nowcast.cc/image-service/api/v1/upload/load/7442?height=150&width=150",
    "https://dev.nowcast.cc/image-service/api/v1/upload/load/7433?height=150&width=150",
    "https://dev.nowcast.cc/image-service/api/v1/upload/load/7421?height=150&width=150",
    "https://dev.nowcast.cc/image-service/api/v1/upload/load/7412?height=150&width=150",
    "https://dev.nowcast.cc/image-service/api/v1/upload/load/7400?height=150&width=150",
    "https://dev.nowcast.cc/image-service/api/v1/upload/load/7385?height=150&width=150",
    "https://dev.nowcast.cc/image-service/api/v1/upload/load/7367?height=150&width=150",
    // add as many images as you want
  ];

  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.opacity = '1';
  }


  setActiveTab(tab: string) {
    this.activeTab = tab;
  }





  openSidebar() {
    this.showSidebar = true;
  }

  closeSidebar() {
    this.showSidebar = false;
  }


  onLogoPositionChange(event: any) {

    this.logoOnRight = event.checked;
    this.playlistForm.get('logoOnRight')?.setValue(event.checked);
  }




  onToggleShowLogo(event: any) {
    this.showLogo = !this.showLogo;
    this.playlistForm.get('showLogo')?.setValue(this.showLogo);
  }

  videos = [
    {
      id: 62368,
      title: 'TestInstaToday',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/10?height=90&width=160'
    },
    {
      id: 62369,
      title: 'MusicVibe',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62370,
      title: 'Sportz',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62371,
      title: 'Cartoon',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62372,
      title: 'KingDom',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62373,
      title: 'Discovery',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62373,
      title: 'Discovery',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62373,
      title: 'Discovery',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62373,
      title: 'Discovery',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62373,
      title: 'Discovery',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62373,
      title: 'Discovery',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62373,
      title: 'Discovery',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
    {
      id: 62373,
      title: 'Discovery',
      type: 'Livestream',
      imageUrl: 'https://dev.nowcast.cc/image-service/api/v1/upload/load/12?height=90&width=160'
    },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Parent Reactive Form
    this.playlistForm = this.fb.group({
      channelDetails: this.fb.group({
        channelName: ['', Validators.required],
        channelNumber: [''],
        channelCategory: ['', Validators.required],
        description: ['']
      }),
      logoOnRight: [false],
      showLogo: [true]

    });
  }

  drop(event: CdkDragDrop<any[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }


    const isFromVideosList = event.previousContainer.id === 'videosList';
    const isToQueue = event.container.id === 'playlistQueue';

    if (isFromVideosList && isToQueue) {

      const item = event.previousContainer.data[event.previousIndex];


      event.container.data.splice(event.currentIndex, 0, { ...item });
      return;
    }


    const item = event.previousContainer.data[event.previousIndex];


    event.previousContainer.data.splice(event.previousIndex, 1);


    event.container.data.splice(event.currentIndex, 0, item);
  }



  onSubmit() {
    if (this.playlistForm.valid) {
      console.log('Form Submitted:', this.playlistForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
