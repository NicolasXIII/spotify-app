import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { CarouselComponent } from "./carousel/carousel/carousel.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CardsAsymmetricComponent } from './cards/cards-asymmetric/cards-asymmetric.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NoImagePipe } from './pipes/no-image.pipe';
import { TableComponent } from './table/table.component';
import { SortDirective } from "./directive/sort.directive";
import { SpinnerComponent } from './spinner/spinner.component';
import { DomSeguroPipe } from "./pipes/dom-seguro.pipe";
import { ErrorComponent } from './alert/error/error.component';
import { SwiperVinylDiskComponent } from './carousel/swiper-vinyl-disk/swiper-vinyl-disk.component';
import { SwiperModule } from 'swiper/angular';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { CardsSymmetricComponent } from './cards/cards-symmetric/cards-symmetric.component';
import { CardsChangeSymmetryComponent } from './cards/cards-change-symmetry/cards-change-symmetry.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        CarouselComponent,
        CardsAsymmetricComponent,
        NoImagePipe,
        TableComponent,
        SortDirective,
        SpinnerComponent,
        DomSeguroPipe,
        ErrorComponent,
        SwiperVinylDiskComponent,
        SideBarComponent,
        CardsSymmetricComponent,
        CardsChangeSymmetryComponent,
    ],
    imports: [
        FormsModule,
        RouterModule,
        BrowserModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        AccordionModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SwiperModule,
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        CarouselComponent,
        CardsAsymmetricComponent,
        NoImagePipe,
        TableComponent,
        SortDirective,
        SpinnerComponent,
        DomSeguroPipe,
        ErrorComponent,
        SwiperVinylDiskComponent,
        SideBarComponent,
        CardsSymmetricComponent,
        CardsChangeSymmetryComponent,
    ],
    providers: [],
})
export class SharedModule { }