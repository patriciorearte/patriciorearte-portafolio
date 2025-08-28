import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {


  @Output()
  toggleSidebar = new EventEmitter();


  openLinkedInProfile(): void {
    // Reemplaza 'URL_DE_TU_PERFIL' con la URL externa de tu perfil de LinkedIn
    window.open('https://www.linkedin.com/in/patricio-rearte-56818a1b2/', '_blank');
  }

  openGithubProfile(): void {
    // Reemplaza 'URL_DE_TU_PERFIL' con la URL externa de tu perfil de LinkedIn
    window.open('https://github.com/patriciorearte', '_blank');
  }

  enviarCorreo(): void {
    window.open('mailto:patriciorearte97@gmail.com', '_blank');
  }

}
