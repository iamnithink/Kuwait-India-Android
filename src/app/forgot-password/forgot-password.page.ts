import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../api/auth/auth.service';
import { UtilsProviderService } from '../utils/utils-provider.service';
import { StorageService } from '../api/storage/storage.service';
import { Push } from '@ionic-native/push/ngx';
import { SignupPost } from '../models/signup-post.interface';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotpasswordForm: FormGroup;
  passwordType: string = 'password';
  confirmPasswordType: string = 'password';
  postData: SignupPost;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private utils: UtilsProviderService,
    private navCtrl: NavController,
    private push: Push,
    private alertController: AlertController,
  ) { }
  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9~!@#$%^&*()_\\-+=|\\/?><;:.,]{5,30})$'),
        ]),
      ],
      confirmPassword: ['', Validators.compose([Validators.required])],
    });
  }

  async forgotPasswordSubmit() {
    if (this.forgotpasswordForm.valid) {
      // this.capitalize();
      if (this.forgotpasswordForm.value.password === this.forgotpasswordForm.value.confirmPassword) {
        const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (this.forgotpasswordForm.value.password.match(paswd)) {
          this.postData = {
            UserID: this.forgotpasswordForm.value.username,
            Password: this.forgotpasswordForm.value.password,
          };
          this.authService.getOtp(this.forgotpasswordForm.value.username).subscribe(
            async res => {
              if (res.Status === '00') {
                this.utils.hideLoader();
                const alert = await this.alertController.create({
                  header: 'Enter OTP',
                  inputs: [
                    {
                      name: 'otp',
                      type: 'number',
                      max: 999999,
                      min: 0,
                      placeholder: 'OTP',
                    },
                  ],
                  buttons: [
                    {
                      text: 'Cancel',
                      role: 'cancel',
                    },
                    {
                      text: 'Submit',
                      handler: data => {
                        if (data.otp === res.OTP) {
                          this.authService.forgotPassword(this.postData.UserID, this.postData.Password, data.otp).subscribe(
                            async response => {
                              if (response.Status === '00') {
                                this.utils.hideLoader();
                                this.utils.showToast('OTP verified and password changed successfully.', 5000);
                                this.navCtrl.navigateRoot('/login');                                
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
                            }
                          );
                        } else {
                          this.utils.showToast('OTP verification failed. Please try again.');
                        }
                      },
                    },
                  ],
                });
                await alert.present();
              } else {
                this.utils.hideLoader();
                this.utils.showAlert('Error', 'Something went wrong');
              }
            },
            err => {
              this.utils
                .showAlert('Error', 'Some error occured. Please try again.')
                .then(() => this.utils.hideLoader());
            }
          );
        } else {
          this.utils.showAlert('Error', 'Check length and allowed characters - Min 7 with Number, Alpha and Special.');
        }
      } else {
        this.utils.showAlert('Error', 'Passwords doesn\'t match. Please check and try again.');
      }
    } else {
      this.utils.showAlert('Error', 'Please fill all the information correctly to proceed.');
    }
  }

  capitalize() {
    const capitalized = this.forgotpasswordForm.value.username.toUpperCase();
    this.forgotpasswordForm.patchValue({ username4: capitalized });
  }

  didClickPasswordChange(type: Number) {
    switch (type) {
      case 1:
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        break;
      case 2:
        this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
        break;
      default:
        break;
    }
  }

}
