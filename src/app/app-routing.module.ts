// app-routing.module - Archivo creado
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {//cualquier path vacio
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'artist/:id',
        component: ArtistaComponent
    },/* 
    {//cualquier otro path
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }, */
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }