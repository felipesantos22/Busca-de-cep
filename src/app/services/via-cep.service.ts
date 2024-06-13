import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from '../interface/Cep';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  search(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`${this.apiUrl}/${cep}/json/`);
  }
}
