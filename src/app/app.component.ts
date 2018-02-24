import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '这是一个angular开发测试页面!';
  // constructor(private http: HttpModule) {}

  // search(term: string) {
  //   return this.HttpModule
  //     .get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
  //     .map((response) => response.json());
  // };

}
