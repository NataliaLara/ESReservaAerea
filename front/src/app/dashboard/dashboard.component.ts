import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AppState} from "../store/index";
import {select, Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {tap} from "rxjs/internal/operators";
import {selectMatieresErrors$} from "../store/selectors/matiere.selector";
import {selectPessoasErrors$} from "../store/selectors/pessoa.selector";
import {selectCidadesErrors$} from "../store/selectors/cidade.selector";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public matiereListErrors$: Observable<any>;
  public pessoaListErrors$: Observable<any>;
  public cidadeListErrors$: Observable<any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private toastr: ToastrService,
              private store: Store<AppState>) {
    this.matiereListErrors$ = store.pipe(
      select(selectMatieresErrors$),
      tap((dialog) => {
        if (!dialog) {
          return;
        }
        if (dialog.type === 'ERROR') {
          this.toastr.error(dialog.message);
        } else {
          this.toastr.success(dialog.message);
        }
        console.log(dialog);
      })
    );
    this.matiereListErrors$.subscribe();

    this.pessoaListErrors$ = store.pipe(
      select(selectPessoasErrors$),
      tap((dialog) => {
        if (!dialog) {
          return;
        }
        if (dialog.type === 'ERROR') {
          this.toastr.error(dialog.message);
        } else {
          this.toastr.success(dialog.message);
        }
        console.log(dialog);
      })
    );
    this.pessoaListErrors$.subscribe();

    this.cidadeListErrors$ = store.pipe(
      select(selectCidadesErrors$),
      tap((dialog) => {
        if (!dialog) {
          return;
        }
        if (dialog.type === 'ERROR') {
          this.toastr.error(dialog.message);
        } else {
          this.toastr.success(dialog.message);
        }
        console.log(dialog);
      })
    );
    this.cidadeListErrors$.subscribe();

  }

}
