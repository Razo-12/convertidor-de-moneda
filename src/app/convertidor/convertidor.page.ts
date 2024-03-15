import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.page.html',
  styleUrls: ['./convertidor.page.scss'],
})
export class ConvertidorPage implements OnInit {
  cantidadDinero: number = 0;
  tipoMoneda:string="";
  opcionSeleccionada: string = "";
  resultadoConversion: number = 0;

  constructor(private alertcontroller:AlertController) { }

  ngOnInit() {
  
  }

  conversion() {
    if (this.cantidadDinero <= 0){
      this.mostrarMensaje('inserta un valor valido');
      return;
    }
    if(this.tipoMoneda === 'dolarP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 10.23;
      }else if(this,this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 23.50;
      }else if(this,this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 7.23;
      }else if(this,this.opcionSeleccionada === 'opcion4'){
        this.resultadoConversion = this.cantidadDinero * 56.10;
      }else if(this,this.opcionSeleccionada === 'opcion5'){
        this.resultadoConversion = this.cantidadDinero * 18.26;
      }
    }else if(this.tipoMoneda === 'euroP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 3;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 0.236;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 10.20;
      }else if(this.opcionSeleccionada === 'opcion4'){
        this.resultadoConversion = this.cantidadDinero * 89.25;
      }else if(this.opcionSeleccionada === 'opcion5'){
        this.resultadoConversion = this.cantidadDinero * 19.25;
      }
    }else if(this.tipoMoneda === 'pesoP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 1.60;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 4.22;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 6.20;
      }else if(this.opcionSeleccionada === 'opcion4'){
        this.resultadoConversion = this.cantidadDinero * 0.45;
      }else if(this.opcionSeleccionada === 'opcion5'){
        this.resultadoConversion = this.cantidadDinero * 3;
      }
    }else if(this.tipoMoneda === 'bolivarP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 1.15;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 2.50;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 45.70;
      }else if(this.opcionSeleccionada === 'opcion4'){
        this.resultadoConversion = this.cantidadDinero * 10.22;
      }else if(this.opcionSeleccionada === 'opcion5'){
        this.resultadoConversion = this.cantidadDinero * 89.13;
      }

    }else if(this.tipoMoneda === 'rupiaP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 2;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 0.123;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 23.10;
      }else if(this.opcionSeleccionada === 'opcion4'){
        this.resultadoConversion = this.cantidadDinero * 0.015;
      }else if(this.opcionSeleccionada === 'opcion5'){
        this.resultadoConversion = this.cantidadDinero * 0.56;
      }
    }else{
      this.mostrarMensaje('no valido');

    }
  }
    async mostrarMensaje(mensaje:string) {
      const alert = await this.alertcontroller.create({
        header: 'Error',
        message: mensaje,
        buttons: ['OK']
      });

      await alert.present();
    }

}