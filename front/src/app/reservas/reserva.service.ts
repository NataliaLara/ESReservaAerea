import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Rx";
import {Reserva} from "./reservas.interface";
import {map} from "rxjs/internal/operators";

@Injectable()
export class ReservaService {
  constructor(private http: HttpClient) { }
  
  getReserva(): Observable<Reserva[]> {
    return  this.http.get<Reserva[]>(`${environment.apiUrl}/reservas`);
  }

  createReserva(body): Observable<Reserva> {
    return this.http.post<Reserva>(`${environment.apiUrl}/reservas`, body);
  }

  deleteReserva(idReserva): Observable<number> {
    return this.http.post<Reserva>(`${environment.apiUrl}/reservas/delete`, {'idReserva': idReserva})
      .pipe(map(response => idReserva));
  }
}
