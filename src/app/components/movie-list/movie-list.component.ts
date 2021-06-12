import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies_ids = [
    'tt0111161', 'tt0068646', 'tt0468569', 'tt0071562',
    'tt0050083', 'tt0167260', 'tt0110912', 'tt0108052',
    'tt1375666', 'tt0137523', 'tt0120737', 'tt0109830',
    'tt0060196', 'tt12361178', 'tt0167261', 'tt0133093',
    'tt0099685', 'tt0080684', 'tt0073486', 'tt6751668'
  ]
  moviesList = [] as any
  constructor(
    public shared: SharedService,
    public api: ApiService
  ) {

  }
  ngOnInit(): void {
    this.shared.breadcrumbText = "Wonderful Movie App"
    this.movies_ids.forEach((id, i) => {
      this.getMovie(id).then(() => {
        if (i == 19) {
          this.shared.hideloading = false
        }
      })

    })
    console.log(this.moviesList)
  }
  async getMovie(id: any) {
    await this.api.getMovieById(id)
      .then((res: any) => {
        this.moviesList.push(res)
      })
  }

}
