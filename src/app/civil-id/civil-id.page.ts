import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';
import {
  NavController,
  AlertController,
  ActionSheetController,
  ToastController,
  LoadingController,
} from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilsProviderService } from '../utils/utils-provider.service';
import { StorageService } from '../api/storage/storage.service';
import { AuthService } from '../api/auth/auth.service';
import { User } from '../models/user.interface';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-civil-id',
  templateUrl: './civil-id.page.html',
  styleUrls: ['./civil-id.page.scss'],
})
export class CivilIdPage implements OnInit {
  showToolbar = false;
  currentColor = 'light';
  currentUser: User;
  options: CameraOptions = {
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 320,
    targetHeight: 320,
    correctOrientation: true,
    popoverOptions: {x: 300, y: 300, width: 200, height: 200, arrowDir: 15}
  };
  imageDataFront = null;
  imageDataBack = null;
  imageDataFrontUrl = '../../assets/camara.png';
  imageDataBackUrl = '../../assets/camara.png';
  imageType = null;

  constructor(
    private formBuilder: FormBuilder,
    private utils: UtilsProviderService,
    private storage: StorageService,
    private navController: NavController,
    private authService: AuthService,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    public domSanitizer: DomSanitizer,
    private file: File,
    private camera: Camera
  ) {
    storage.getUser().then((user) => (this.currentUser = user));
  }
  
  ngOnInit() { }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 130;
      this.currentColor = this.showToolbar ? 'dark' : 'light';
    }
  }
  
  takePicture(event) {
    this.camera.getPicture(this.options).then((imageData) => {
      if(this.imageType === 'front') {
        this.imageDataFrontUrl = (window as any).Ionic.WebView.convertFileSrc(imageData);
      } else if(this.imageType === 'back') {
        this.imageDataBackUrl = (window as any).Ionic.WebView.convertFileSrc(imageData);
      }
      this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(file => {
          if (file.size >= 100000){
            this.utils.showAlert('Error', 'File size exceeds 100kb');
          } else {
            const formData: any = new FormData();
            formData.append('file1', file.localURL);
            this.uploadFile(formData);
          }
        });
      });
    }, (err) => {
      // Handle error
      this.utils.showAlert('Error', 'Something went wrong');
    });
  }

  uploadFile(file) {
    this.authService.fileUpload(file).subscribe(
      async response => {
        if (response.Status === '00' && response.ImageNo) {
          this.utils.hideLoader();
          if(this.imageType === 'front') {
            this.imageDataFront = response.ImageNo;
          } else if(this.imageType === 'back') {
            this.imageDataBack = response.ImageNo;
          }
        } else if (response.Status === '01') {
          this.utils.hideLoader();
          this.utils.showAlert('Error', response.ErrorDesc);
        } else {
          this.utils.hideLoader();
          this.utils.showAlert('Error', 'Something went wrong');
        }
      },
      err => {
        this.utils
          .showAlert('Error', 'Some error occured. Please try again.')
          .then(() => this.utils.hideLoader());
      });
  }

  async selectImage(imageType, event) {
    this.imageType = imageType;
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [
        // {
        //   text: 'Load from Library',
        //   handler: () => {
        //     // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        //   },
        // },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(event)
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  uploadCivilId() {
    const postData = {
      UserID: this.currentUser.UserID,
      ID_FRONT: this.imageDataFront,
      ID_BACK: this.imageDataBack
    };
    this.authService.civilIdUpload(postData).subscribe(
      async response => {
        if (response.Status === '00') {
          this.utils.hideLoader();
          // success                  
          this.utils.showToast('Uploaded Civil ID successfully.', 5000);  
          this.navController.pop();         
        } else if (response.Status === '01') {
          this.utils.hideLoader();
          this.utils.showAlert('Error', response.ErrorDesc);
        } else {
          this.utils.hideLoader();
          this.utils.showAlert('Error', 'Something went wrong');
        }
      },
      err => {
        this.utils
          .showAlert('Error', 'Some error occured. Please try again.')
          .then(() => this.utils.hideLoader());
      });
  }

  onSubmit() {
    console.log(this.imageDataBack);
    console.log(this.imageDataFront);
    if(this.imageDataFront && this.imageDataBack) {
      // Submit API
      this.uploadCivilId();
    } else {
      this.utils.showAlert('Error', 'Upload Front and back images');
    }
  }

}
