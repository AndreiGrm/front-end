import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,  // Aggiungi questa riga
  imports: [CommonModule, HttpClientModule],  // Importa i moduli necessari
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]  // Puoi anche fornire il servizio qui se necessario
})
export class AppComponent {
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessage().subscribe((data) => {
      this.message = data.message;
    });
  }
}
