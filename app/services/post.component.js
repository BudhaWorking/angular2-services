"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var PostComponent = (function () {
    //private newPost :any;
    function PostComponent(_postService) {
        var _this = this;
        this._postService = _postService;
        /*this.posts = _postService.getposts();*/
        this._postService.getPosts().subscribe(function (response) {
            _this.posts = response;
        });
    }
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: "posts",
        template: "<div class =\"container\">\n\t\t\t\t\t<h1>My Blog Post</h1><br>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label>Title: </label>\n\t\t\t\t\t\t<input type =\"text\" [(ngModel)]=\"title\"  class =\"form-control\"/><br>\n\t\t\t\t\t\t<label>Body: </label>\n\t\t\t\t\t\t<input type =\"text\" [(ngModel)]=\"body\"  class =\"form-control\"/><br>\n\t\t\t\t\t\t<input type =\"button\" (click)=\"addPost()\" value=\"clickme\"/><br>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<ul *ngFor=\"let post of posts\">\n\t\t\t\t\t\t\t\t<li>{{post.title}}</li>\n\t\t\t\t\t\t\t\t<li>{{post.body}}</li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t</div>"
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map