import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormComponent } from './components/form/form.component';
import { WidgetCardComponent } from './components/widget-card/widget-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PlateNumberComponent } from './components/plate-number/plate-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackgroundImageComponent } from './components/background-image/background-image.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    ButtonComponent,
    AlertComponent,
    CardComponent,
    ModalComponent,
    FormComponent,
    WidgetCardComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    MessagesComponent,
    PlateNumberComponent,
    BackgroundImageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    ButtonComponent,
    AlertComponent,
    CardComponent,
    ModalComponent,
    FormComponent,
    WidgetCardComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    MessagesComponent,
    PlateNumberComponent
  ]
})
export class SharedModule { }
