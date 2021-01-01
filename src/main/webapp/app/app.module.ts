import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BotPanelSharedModule } from 'app/shared/shared.module';
import { BotPanelCoreModule } from 'app/core/core.module';
import { BotPanelAppRoutingModule } from './app-routing.module';
import { BotPanelHomeModule } from './home/home.module';
import { BotPanelEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BotPanelSharedModule,
    BotPanelCoreModule,
    BotPanelHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BotPanelEntityModule,
    BotPanelAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class BotPanelAppModule {}
