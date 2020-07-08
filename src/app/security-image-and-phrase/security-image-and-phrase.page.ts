import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IsValidIdRes } from "../models/is-valid-id-res.interface";
import PublicApi from "../api/constants/public";

@Component({
  selector: "app-security-image-and-phrase",
  templateUrl: "./security-image-and-phrase.page.html",
  styleUrls: ["./security-image-and-phrase.page.scss"],
})
export class SecurityImageAndPhrasePage implements OnInit {
  isValidIdRes: IsValidIdRes;
  image: string;
  userId: string;
  isChecked: boolean = false;

  constructor(private router: Router) {
    const { userId, isValidIdRes } = router.getCurrentNavigation().extras.state;
    this.isValidIdRes = isValidIdRes;
    this.image = PublicApi.BASE + "Avatars/" + this.isValidIdRes.AVATAR_IMAGE;
    this.userId = userId;
  }

  ngOnInit() {}

  gotoPassword() {
    if (this.isChecked) {
      this.router.navigate(["/password"], {
        state: { userId: this.userId },
      });
    }
  }
}
