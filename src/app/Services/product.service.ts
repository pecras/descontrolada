import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Produto } from '../../Model/produto.model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private apiUrl = 'http://localhost:5009/api/Produtos';
 
 
 
http=inject(HttpClient);





  addProduct(product: Produto) {
         this.http.post<Produto>(this.apiUrl, product).subscribe((res)=>{
          if (res.name) {
        alert("produto criado")
      }else{
        alert("erro ao criar o produto")
      }

     
    });
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl+'/All').pipe(
       tap(response => {return response})
     )}


  getProducts(pagina:number, tamanhoPagina:number): Observable<Produto[]> {
   return this.http.get<Produto[]>(this.apiUrl+'?pagina='+pagina+'&tamanhoPagina='+ tamanhoPagina).pipe(
      tap(response => console.log('Produtos recebidos'))
    )}
  
    updateProduct(updatedProduct: any): Observable<any> {
     return this.http.put<any[]>(this.apiUrl+'/'+updatedProduct.id,updatedProduct).pipe(
        tap(response => 
          alert('Os campos foram atualizados.'))
      )}
  

    deleteProduct(id: number): Observable<void> {
      return this.http.delete<any>(this.apiUrl+'/delete/'+id).pipe(
        tap(() => 
          alert('Os campos foram apagados.'))
      )}
  }
 
    