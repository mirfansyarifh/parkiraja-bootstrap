import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { ExceptionPageComponent } from './exception-page/exception-page.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { StaticWidgetComponent } from './static-widget/static-widget.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    ButtonComponent,
    AlertComponent,
    ExceptionPageComponent,
    CardComponent,
    ModalComponent,
    StaticWidgetComponent,
    FormsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    ButtonComponent,
    AlertComponent,
    ExceptionPageComponent,
    CardComponent,
    ModalComponent,
    StaticWidgetComponent,
    FormsComponent
  ]
})

export class SharedModule { }
