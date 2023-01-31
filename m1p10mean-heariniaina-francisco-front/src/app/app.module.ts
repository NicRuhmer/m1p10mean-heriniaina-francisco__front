import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DepotComponent } from './components/depot/depot.component';
import { ReparationComponent } from './components/reparation/reparation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { AvancementComponent } from './components/avancement/avancement.component';
import { FactureComponent } from './components/facture/facture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    DepotComponent,
    ReparationComponent,
    ProfileComponent,
    HistoriqueComponent,
    VoitureComponent,
    AvancementComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
