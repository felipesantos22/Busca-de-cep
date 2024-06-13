import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViaCepService } from '../../services/via-cep.service';
import { Cep } from '../../interface/Cep';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cep!: string;
  cepData?: Cep;

  constructor(private viaCepService: ViaCepService) {}

  search() {
    if (this.cep) {
      this.viaCepService.search(this.cep).subscribe((data: Cep) => {
        this.cepData = data;
      });
    }
  }
}
