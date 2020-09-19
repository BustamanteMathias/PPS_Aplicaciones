import { Component } from "@angular/core";
//RUTA
import { Router } from "@angular/router";
//EXIT APP
import { Platform } from "@ionic/angular";
import { OnInit, OnDestroy, AfterViewInit } from "@angular/core";
//FIREBASE SERVICIO
import { FirebaseService } from "../../servicios/firebase.service";
//TRAER ELEMENTOS DEL HTML
import { ElementRef, ViewChild } from "@angular/core";
//ALERT
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  public errorEmail: string = "";
  public errorPass: string = "";

  public email: string = "";
  public pass: string = "";

  constructor(
    private authService: FirebaseService,
    public router: Router,
    private platform: Platform,
    public alertController: AlertController
  ) {}

  Ingresar() {
    //Validar usuario
    if (this.email != "") {
      if (this.email.includes("@") && this.email.includes(".")) {
        if (this.pass.length >= 6) {
          if (this.pass.length <= 12) {
            this.authService
              .ServiceLogin(this.email, this.pass)
              .then((res) => {
                this.Limpiar();
                this.router.navigate(["/inicio"]);
              })
              .catch((err) => {
                this.presentAlert();
                this.Limpiar();
              });
          } else {
            this.errorPass = "Error! Re-ingresar.";
          }
        } else {
          this.errorPass = "Error! Re-ingresar.";
        }
      } else {
        this.errorEmail = "Error! Re-ingresar.";
      }
    } else {
      this.errorEmail = "Error! Re-ingresar.";
    }
  }

  IngresarTipo(tipo: string) {
    switch (tipo) {
      case "Administrador":
        this.email = "admin@admin.com";
        this.pass = "111111";
        break;
      case "Invitado":
        this.email = "invitado@invitado.com";
        this.pass = "222222";
        break;
      case "Usuario":
        this.email = "usuario@usuario.com";
        this.pass = "333333";
        break;
      case "Anonimo":
        this.email = "anonimo@anonimo.com";
        this.pass = "444444";
        break;
      case "Tester":
        this.email = "tester@tester.com";
        this.pass = "555555";
        break;
    }
  }

  Limpiar() {
    this.email = "";
    this.pass = "";
    this.errorEmail = "";
    this.errorPass = "";
  }

  LimpiarErrorEmail() {
    this.errorEmail = "";
  }

  LimpiarErrorPass() {
    this.errorPass = "";
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator["app"].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "ERROR AL INGRESAR",
      subHeader: "Se produjo un error al validar su usuario.",
      message: "Verifique si los datos ingresados son correctos.",
      buttons: ["Continuar"],
    });

    await alert.present();
  }
}
