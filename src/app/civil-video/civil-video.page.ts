import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';
// import {
//   NavController,
//   AlertController,
//   ActionSheetController,
//   ToastController,
//   LoadingController,
//   Platform
// } from '@ionic/angular';

import { File, FileEntry } from '@ionic-native/file';
import { DomSanitizer } from '@angular/platform-browser';
// import {
//   MediaCapture,
//   MediaFile,
//   CaptureError,
//   CaptureVideoOptions
// } from '@ionic-native/media-capture/ngx';
// import { StreamingMedia } from '@ionic-native/streaming-media';
import { UtilsProviderService } from '../utils/utils-provider.service';
import { StorageService } from '../api/storage/storage.service';
import { AuthService } from '../api/auth/auth.service';
import { User } from '../models/user.interface';
// const MEDIA_FOLDER_NAME = 'my_media';

@Component({
  selector: 'app-civil-video',
  templateUrl: './civil-video.page.html',
  styleUrls: ['./civil-video.page.scss'],
})
export class CivilVideoPage implements OnInit {
  showToolbar = false;
  currentColor = 'light';
  currentUser: User;
  files = [];
  // options: CaptureVideoOptions = { limit: 1, duration: 30, quality: 50 };

  constructor(
    private utils: UtilsProviderService,
    private storage: StorageService,
    // private navController: NavController,
    // private authService: AuthService,
    // private alertController: AlertController,
    // private actionSheetController: ActionSheetController,
    public domSanitizer: DomSanitizer,
    private file: File,
    // private mediaCapture: MediaCapture,
    // private streamingMedia: StreamingMedia,
    // private plt: Platform
  ) {
    storage.getUser().then((user) => (this.currentUser = user));
  }

  ngOnInit() {
    // this.plt.ready().then(() => {
    //   const path = this.file.dataDirectory;
    //   this.file.checkDir(path, MEDIA_FOLDER_NAME).then(
    //     () => {
    //       this.loadFiles();
    //     },
    //     err => {
    //       this.file.createDir(path, MEDIA_FOLDER_NAME, false);
    //     }
    //   );
    // });
  }

  // loadFiles() {
  //   this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
  //     res => {
  //       this.files = res;
  //     },
  //     err => console.log('error loading files: ', err)
  //   );
  // }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 130;
      this.currentColor = this.showToolbar ? 'dark' : 'light';
    }
  }

  // async selectMedia() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Select File Source',
  //     buttons: [
  //       {
  //         text: 'Record Video',
  //         handler: () => {
  //           this.recordVideo();
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       }
  //     ]
  //   });
  //   await actionSheet.present();
  // }
 
  // recordVideo() {
  //   this.mediaCapture.captureVideo(this.options).then(
  //     (data: MediaFile[]) => {
  //       if (data.length > 0) {
  //         this.copyFileToLocalDir(data[0].fullPath);
  //       }
  //     },
  //     (err: CaptureError) => console.error(err)
  //   );
  // }

  // copyFileToLocalDir(fullPath) {
  //   let myPath = fullPath;
  //   // Make sure we copy from the right location
  //   if (fullPath.indexOf('file://') < 0) {
  //     myPath = 'file://' + fullPath;
  //   }
 
  //   const ext = myPath.split('.').pop();
  //   const d = Date.now();
  //   const newName = `${d}.${ext}`;
 
  //   const name = myPath.substr(myPath.lastIndexOf('/') + 1);
  //   const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
  //   const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
 
  //   this.file.copyFile(copyFrom, name, copyTo, newName).then(
  //     success => {
  //       this.loadFiles();
  //     },
  //     error => {
  //       console.log('error: ', error);
  //     }
  //   );
  // }
 
  // openFile(f: FileEntry) {if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
  //     // E.g: Use the Streaming Media plugin to play a video
  //     // this.streamingMedia.playVideo(f.nativeURL);
  //   }
  // }
 
  // deleteFile(f: FileEntry) {
  //   const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
  //   this.file.removeFile(path, f.name).then(() => {
  //     this.loadFiles();
  //   }, err => console.log('error remove: ', err));
  // }

  // onSubmit() {
  //   debugger
  // }
}
