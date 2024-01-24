import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private htpClient: HttpClient) {}
  search(term: string) {
    return this.htpClient.get('https://en.wikipedia.org/w/api.php?', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: 1,
        srsearch: term,
        origin: '*',
      },
    });
  }
}
