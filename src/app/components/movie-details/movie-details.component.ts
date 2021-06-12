import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie_id: any
  movie_details: any
  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    public shared: SharedService
  ) {
    this.shared.hideloading = true
    console.log(this.movie_id)
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movie_id = params['id'];
      this.api.getMovieById(this.movie_id).then(res => {
        console.log(res)
        this.shared.hideloading = false
        this.movie_details = res
        this.shared.breadcrumbText = this.movie_details.Title
      })
    });
  }

}
