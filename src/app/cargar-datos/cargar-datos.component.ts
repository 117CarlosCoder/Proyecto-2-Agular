import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cargar-datos',
  templateUrl: './cargar-datos.component.html',
  styleUrls: ['./cargar-datos.component.css']
})
export class CargarDatosComponent {

  file: File | null = null;
  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  onFileSelected(event: any): void {
    try{
      this.file = event.target.files[0];
    }
    catch (error) {
      const invalidFeedback = document.querySelector('.invalid-feedback');
        if (invalidFeedback) {
          invalidFeedback.classList.add('d-block');
        }
    }
  }
  

  /*submitForm() {
      else {
      const invalidFeedback = document.querySelector('.invalid-feedback');
      if (invalidFeedback) {
        invalidFeedback.classList.add('d-block');
      }
    }
  }*/
  submitForm() {
    try{
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.isLoading = true;
      const archivoSeleccionado = fileInput.files[0];
      console.log('Archivo seleccionado:', 
      archivoSeleccionado.name);
      const formData = new FormData();
      const fileReader = new FileReader();
      const fileReaderPromise = new Promise((resolve, reject) => {
      fileReader.onload = () => {
      const contenidoArchivo = fileReader.result as string;
      const objetoJSON = JSON.parse(contenidoArchivo);
      resolve(objetoJSON);
      
    }
    fileReader.onerror =reject;
  });
      /*if (this.file) {
        const formData = new FormData();
        formData.append('file', this.file);
      }*/

      

      if (this.file) {
        fileReader.readAsText(this.file);
      }
      

      const invalidFeedback = document.querySelector('.invalid-feedback');
      if (invalidFeedback) {
      invalidFeedback.classList.remove('d-block');
      }

      let formDatas: unknown = null;
      fileReaderPromise.then((objetoJSON) => {
        // Hacer algo con el objeto JSON
        
        console.log('JSON:', objetoJSON);
        this.http.post('http://localhost:8080/apirest_war_exploded/usuarios/cargardatos', objetoJSON, {responseType: 'text'})
      .subscribe(response => {
        console.log('Archivo enviado al servidor');
        console.log(formDatas);
        // Manejar la respuesta del servidor si es necesario
       
      }, error => {
        console.error('Error al enviar el archivo al servidor', error);
      });

      this.http.post('http://localhost:8080/apirest_war_exploded/cargas/servicios', objetoJSON, {responseType: 'text'})
      .subscribe(response => {
        console.log('Archivo enviado al servidor cargas');
        console.log(formDatas);
        // Manejar la respuesta del servidor si es necesario
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/inicio-sesion']);
        }, 2000);
      }, error => {
        console.error('Error al enviar el archivo al servidor', error);
        this.isLoading = false;
        alert("El archivo no es compatible")
      });


      }).catch((error) => {
        console.error('Error al leer el archivo:', error);
      });


      

      
      
      

    } else {
      const invalidFeedback = document.querySelector('.invalid-feedback');
      if (invalidFeedback) {
        invalidFeedback.classList.add('d-block');
      }
    }
  }

  catch (error) {
    this.router.navigateByUrl('/');
    
  }
  
}
 
}
