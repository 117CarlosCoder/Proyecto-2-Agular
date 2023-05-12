import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
import * as forge from 'node-forge';
import { util } from 'node-forge';




@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent {
  inicioVisible = true;
  constructor(private http: HttpClient, private router: Router) {
  }

  
  usuario = {
    correo:'',
    contraseña:''
  };

  usuariocambio = {
    correo:'',
    contraseña:''
  };



  onSubmit() {
    this.usuariocambio.contraseña = '';
    this.usuariocambio.correo = '';
    /*const paddedData = this.padData(this.usuario.contraseña); // agregamos relleno PKCS5
    let encrypted = null
    encrypted = CryptoJS.AES.encrypt(paddedData, 'fZ@b3Sb&N1Nefr&Rp#@NqSFhZ0!X%831').toString();
    const desencrypted = CryptoJS.AES.decrypt(encrypted, 'fZ@b3Sb&N1Nefr&Rp#@NqSFhZ0!X%831').toString(CryptoJS.enc.Utf8);
    console.log(desencrypted)
    this.usuariocambio.contraseña = encrypted;
    this.usuariocambio.correo = this.usuario.correo;*/

    //const claveEncriptacion = util.createBuffer('clave_secreta', 'utf8');

  // Crear un vector de inicialización aleatorio de 16 bytes
  /*const iv = forge.random.getBytesSync(16);

  // Crear un objeto Cipher de Forge para encriptar la contraseña
  const cipher = forge.cipher.createCipher('AES-CBC', 'fZ@b3Sb&N1Nefr&Rp#@NqSFhZ0!X%831');
  cipher.start({ iv: iv });
  cipher.update(util.createBuffer(this.usuario.contraseña, 'utf8'));
  cipher.finish();

  // Obtener el texto cifrado y el vector de inicialización como arrays de bytes
  const textoCifrado = Array.from(cipher.output.toHex());
  const vectorInicializacion = Array.from(iv);

  // Concatenar el vector de inicialización y el texto cifrado en un solo array de bytes
  const resultado = vectorInicializacion.concat(textoCifrado);

  // Codificar el resultado como una cadena base64
  const passwordEncriptada = util.encode64(resultado.join(''));

 
    

   const passwordEncriptada = CryptoJS.AES.encrypt(this.usuario.contraseña, "fZ@b3Sb&N1Nefr&Rp#@NqSFhZ0!X%831").toString();
  
    console.log(passwordEncriptada)
    this.usuariocambio.contraseña = passwordEncriptada;
    this.usuariocambio.correo = this.usuario.correo;*/
    this.usuariocambio.contraseña = this.usuario.contraseña;
    this.usuariocambio.correo = this.usuario.correo;
    console.log(this.usuario.correo)
    console.log(this.usuariocambio.contraseña)
    const jsonCredenciales = this.usuariocambio;
    this.http.post('http://localhost:8080/apirest_war_exploded/usuarios/iniciar', jsonCredenciales, { responseType: 'json'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        const tipo = respuesta['tipo'];
        const valor = respuesta['valor'];

        if (valor && tipo === 'Paciente') {
          this.router.navigate(['/menu-paciente']);
        }
        if (valor && tipo === 'Administrador') {
          // Redirigir a la página de inicio de usuario
          this.router.navigate(['/menu-admin']);
        }
        if (valor && tipo === 'Medico') {
          // Redirigir a la página de inicio de usuario
          this.router.navigate(['/menu-inicio-medico']);
        }
        if (valor && tipo === 'Laboratorio') {
          // Redirigir a la página de inicio de usuario
          this.router.navigate(['/menu-inicio-laboratorio']);
        }



        // La respuesta del servidor se ha recibido correctamente
        console.log(respuesta);
      },
      (error) => {
        // Ha ocurrido un error al enviar la solicitud al servidor
        console.error(error);
      }
    );
  }

  /*padData(data: string) {
    console.log(data);
    const blockSize = 16; // Tamaño del bloque de cifrado (en bytes)
    const paddingChar = blockSize - (data.length % blockSize); // Carácter de relleno
    const padding = String.fromCharCode(paddingChar).repeat(paddingChar); // Agregar relleno
    return data + padding;
  }*/ 
  /*padData(data: string) {
    const blockSize = 16;
    const paddingChar = blockSize - (data.length % blockSize);
    const paddingBuffer = Buffer.alloc(paddingChar, paddingChar);
    const dataBuffer = Buffer.from(data, 'utf8');
    const paddedData = Buffer.concat([dataBuffer, paddingBuffer]);
    return paddedData.toString('utf8');
  }*/
  
  
  
  

  /*padData(data: string) {
    const blockSize = 8; // Tamaño del bloque de cifrado (en bytes)
    const paddingChar = blockSize - (data.length % blockSize); // Carácter de relleno
    const paddedData = data + String.fromCharCode(paddingChar).repeat(paddingChar); // Agregar relleno
    return paddedData;
  }*/
   padData(data: string) {
    const blockSize = 8; // Tamaño del bloque de cifrado (en bytes)
    const paddingChar = blockSize - (data.length % blockSize); // Carácter de relleno
    let padding = String.fromCharCode(paddingChar).repeat(paddingChar); // Agregar relleno
  
    // Si la longitud del relleno es cero, agregar un bloque completo de relleno
    if (paddingChar === 0) {
      padding = String.fromCharCode(blockSize).repeat(blockSize);
    }
  
    return data + padding;
  }
  

 /* padData(data: string) {
    const blockSize = 8; // Tamaño del bloque de cifrado (en bytes)
    const paddingChar = blockSize - (data.length % blockSize); // Carácter de relleno
    const padding = String.fromCharCode(paddingChar).repeat(paddingChar); // Agregar relleno
    return data + padding;
  }*/
  
  

  

  

}

/*export class InicioSesionComponent {

  constructor(private http: HttpClient) {}
  user = { email: '', password: '' };


  ngOnInit() {
     this.http.post('http://localhost:8080/apirest_war_exploded/usuarios', this.user.email).subscribe(
      (respuesta) => {
        // La respuesta del servidor se ha recibido correctamente
        console.log(respuesta);
      },
      (error) => {
        // Ha ocurrido un error al enviar la solicitud al servidor
        console.error(error);
      }
    );
  }
}*/
