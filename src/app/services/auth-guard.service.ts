import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {
    authenticated = true;

    constructor(private route: Router, private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (this.userService.isAuthenticated()) {
        if (this.authenticated) {
            return true;
        }
        else {
            this.route.navigate(['/signin']);
        }
        return false;
    }
}