import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AlertComponent} from './alert/alert.component';
import {SuccessComponent} from './success/success.component';
import {FailsComponent} from "./fails/fails.component";
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        SuccessComponent,
        FailsComponent,
        ServerComponent,
        ServersComponent,
        ProductsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
