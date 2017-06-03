import {Component} from '@angular/core'
import {PostService} from './post.service'


@Component({

	selector : "posts",
	template : `<div class ="container">
					<h1>My Blog Post</h1><br>
					<div>
						<label>Title: </label>
						<input type ="text" [(ngModel)]="title"  class ="form-control"/><br>
						<label>Body: </label>
						<input type ="text" [(ngModel)]="body"  class ="form-control"/><br>
						<input type ="button" (click)="addPost()" value="clickme"/><br>
					</div>

						<ul *ngFor="let post of posts">
								<li>{{post.title}}</li>
								<li>{{post.body}}</li>
						</ul>

				</div>`
})

export class PostComponent{

	private posts : any[];
	private title : string;
	private body : string;
	//private newPost :any;

	constructor(private _postService : PostService){
		/*this.posts = _postService.getposts();*/
		this._postService.getPosts().subscribe(response => {
			this.posts = response
		});
		
	}
	
/*addPost(){
	console.log("hey you clicked me")
	this.newPost={
			title : this.title,
			body : this.body
		}
		console.log(this.newPost)
		this._postService.addPost(this.newPost)
}*/
}