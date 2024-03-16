import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestLogicComponent } from './test-logic/test-logic.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'test-logic', component: TestLogicComponent }];
