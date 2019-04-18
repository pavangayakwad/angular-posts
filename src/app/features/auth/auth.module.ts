import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        AuthRoutingModule
    ],
    declarations: [LoginComponent, SignupComponent]
})

export class AuthModule {}