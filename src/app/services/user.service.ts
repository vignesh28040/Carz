import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class UserService{
    token:string;
    constructor(private route:Router){}

    loginUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            (response) => {
                 this.route.navigate(["home"]);
                firebase.auth().currentUser.getToken().then(
                    (token: string) => {
                        this.token = token
                    }
                );
            }
        )
    }

    isAuthenticated() {
        return this.token != null;
    }
}