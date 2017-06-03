import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'Rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/operator/map';

interface  Post{
	_id : number,
	title : string,
	body : string
}

@Injectable()

export class PostService{

	private  posts : any[];
	private apiUrl : string;

	constructor(private _http: Http){

		this.apiUrl ="https://jsonplaceholder.typicode.com/posts"
		/*this.posts =[

		{
			title: "Hello Banglore",
			body: "I am wishing good morning to  everybody"
		},
		{
			title: "Latest Update",
			body: "Why you  need the latest update? just  go home "
		},
		{
			title: "I am home",
			body: "I am home for the day and going home "
		},

		]*/
	}

	getPosts() : Observable<Post[]> {
			return  this._http
						.get(this.apiUrl)
						.map((response) => {
							console.log(response)
							return response.json()
						});
		//return this.posts;
	}
	// addPost(newPost : any){
	// 	this.posts.push(newPost)
	// }
}