import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {
  }

  get url(): string {
    return environment.baseUrl;
  }

  add(title: string, description: string): Observable<Todo> {
    return this.http.post<Todo>(this.url, {
      title,
      description,
    });
  }

  get(): Observable<Todo[]> {
    return this.http.get<{ data: Todo[] }>(this.url).pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  delete(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url}/${id}`);
  }

  update(id: string, changes: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${id}`, changes);
  }
}
