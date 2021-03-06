import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { ProvidersService } from 'fccore';
@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styles: [
        `.login-in {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .login-bg {
            width: 100%;
            height: 100%;
            background-size: 100% 100%;
            position: fixed;
        }
        
        .login-bg .login-content {
            width: 686px;
            height: 420px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -348px;
            margin-top: -210px;
            min-height: 400px;
            box-shadow: 0 1px 5px 0px rgba(50, 50, 50, 0.2);
        }
        
        .login-bg .login-content .login-left {
            float: left;
            width: 390px;
            height: 100%;
            background: #4E8AEC;
            position: relative;
        }
        
        .login-bg .login-content .login-left .map-img {
            width: 336px;
            height: 300px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -168px;
            margin-top: -150px;
        }
        
        .login-bg .login-content .login-left .left-img {
            width: 365px;
            height: 156px;
            position: absolute;
            left: 50%;
            margin-left: -182px;
            top: 130px;
        }
        
        .login-bg .login-content .login-right {
            float: right;
            width: 296px;
            height: 100%;
            background: #fff;
            position: relative;
        }
        
        .login-bg .login-content .login-right .login-right-content {
            width: 80%;
            position: absolute;
            left: 30px;
            top: 98px;
        }
        
        .login-bg .login-content .login-right .login-h2 {
            width: 100%;
            font-size: 16px;
            color: #323232;
            text-align: center;
            margin-bottom: 20px;
            font-weight: 400;
        }
        
        .login-bg .login-content .login-right .login-date {
            margin-bottom: 5px !important;
        }
        
        .login-bg .login-content .login-right .user-box {
            width: 100%;
            height: 30px;
            border-radius: 3px;
            margin-bottom: 20px;
        }
        
        .login-bg .login-content .login-right .user-box .user-input {
            text-align: center;
            width: 100%;
            height: 100%;
            line-height: 30px;
            outline: none;
            border: 1px solid #aaa;
            border-radius: 4px;
            color: #666;
            font-size: 12px;
        }
        
        .login-bg .login-content .login-right .user-box input::placeholder {
            color: #cccccc !important;
            font-size: 12px !important;
        }
        
        .login-bg .login-content .login-right .user-box input:focus::placeholder {
            color: transparent !important;
        }
        
        .login-bg .login-content .login-right .user-box .user-input:hover {
            color: #666;
            background-color: #ffffff;
            border-color: #666;
        }
        
        .login-bg .login-content .login-right .user-box .user-input:focus {
            color: #666;
            border-color: #666 !important;
            background-color: #fff;
        }
        
        .login-bg .login-content .login-right .save-word {
            width: 100%;
            text-align: center;
        }
        
        .login-bg .login-content .login-right .save-word .mat-checkbox-inner-container {
            width: 14px;
            height: 14px;
            border-color: #929292;
        }
        
        .login-bg .login-content .login-right .save-word .mat-checkbox-layout .mat-checkbox-label {
            font-size: 12px;
            color: #666;
        }
        
        .login-bg .login-content .login-right .save-word .mat-checkbox-frame {
            border-width: 1px;
        }
        
        .login-bg .login-content .login-right .save-word .mat-checkbox-checked.mat-accent .mat-checkbox-background {
            background: #3f77e4;
        }
        
        .login-bg .login-content .login-right .login-button {
            display: block;
            width: 100%;
            height: 30px;
            outline: none;
            border: none;
            background: #3f77e4;
            font-size: 12px;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .login-bg .login-content .login-right .login-button:hover {
            background: #3f77e4;
        }
        
        .login-bg .login-content .login-right .login-btn {
            margin-top: 7px;
            margin-bottom: 54px;
        }
        
        .login-bg .login-content .login-right .google-download {
            width: 100%;
        }
        
        .login-bg .login-content .login-right .google-download p {
            font-size: 12px;
            text-align: center;
            color: #666;
        }
        
        .login-bg .login-content .login-right .google-download a {
            font-size: 12px;
            color: #ff7573;
            cursor: pointer;
        }
        
        .login-bg .user-input.ng-invalid {
            border: 1px solid #ff7573 !important;
        }
        
        .login-bg .user-input.ng-valid {
            border: 1px solid #aaa !important;
        }
        
        .login-bg .user-box {
            position: relative;
        }
        
        .login-bg .required-color {
            width: 100%;
            height: 20px;
            position: absolute;
            left: 0;
            top: 30px;
            font-size: 12px;
            text-align: center;
            color: #ff7573;
            z-index: 9;
            border-radius: 2px;
        }
        
        .login-bg .required-color p {
            height: 20px;
            line-height: 20px;
        }
        .sigin-error {
            width: 100%;
            margin-bottom: 30px;
            line-height: 24px;
            box-sizing: border-box;
            font-size: 14px;
            margin-top:20px;
        }
        .sigin-error-in {
            background: #FEEEEB;
            border: 1px solid #F15532;
            color: #F15533;
            text-align: left;
            padding:3px 6px;
        }
        `
    ]
})
export class SigninComponent implements OnInit {
    hasError: boolean = false;
    msg: string = "";
    userId: string = "";
    password: string = "";
    _projectName = environment.projectName;
    constructor(private router: Router, private providers: ProvidersService) { }
    ngOnInit () {
        if(this.providers.userService.getUserInfo()) {
            this.router.navigate(['/'+environment.pid.toLocaleLowerCase()+'/home']);
        }
    }
    login () {
        this.providers.userService.login(this.userId, this.password).subscribe(result => {
            if(result.CODE === '0') {
                this.hasError = false;
                this.providers.userService.storeUserInfo(result);
                this.router.navigate(['/'+environment.pid.toLocaleLowerCase()+'/home']);
            } else {
                this.hasError = true;
                this.msg = result.MSG;
            }
        })
    }
}