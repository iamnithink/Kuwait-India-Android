import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router'
import { Observable } from 'rxjs'
import { StorageService } from '../api/storage/storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    console.log('AuthGuard#canActivate called')
    return this.storage
      .checkLoginStatus()
      .then(res => {
        if (res) {
          return true
        } else {
          this.router.navigate(['/welcome'])
          return false
        }
      })
      .catch(() => {
        this.router.navigate(['/welcome'])
        return false
      })
  }
}
