import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CreatePostComponent } from "./features/post/pages/create-post/create-post.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CreatePostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCrud';
}
