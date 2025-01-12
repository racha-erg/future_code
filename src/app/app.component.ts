import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CouseCardComponent } from './couse-card/couse-card.component';
import { CategoryType, Icourse } from './models/icourse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, CouseCardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /* The `title` property in the `AppComponent` class is storing the value `'future_code'`. This value
  can be used in the template file (`app.component.html`) to display the title dynamically. */
  titletext = 'couse  Angular';
  onLogoClicked(): void{
    alert('heloo');
  }

  onKeyup(title:string): void{
    this.titletext = title;
  }

  
  readonly courses: Array<Icourse> = 
    [
  {
    "id": 1,
    "description": "Angular 17",
    "imageUrl": "",
    "lessonsCount": 70,
    "longDescription": "",
    category: CategoryType.beginners
  },
  {
    "id": 2,
    "description": "React Basics",
    "imageUrl": "",
    "lessonsCount": 45,
    "longDescription": "",
    category: CategoryType.advanced
  },
  {
    "id": 3,
    "description": "Vue.js Essentials",
    "imageUrl": "",
    "lessonsCount": 55,
    "longDescription": "",
    category: CategoryType.intermediate
  },
  {
    "id": 4,
    "description": "Node.js Fundamentals",
    "imageUrl": "",
    "lessonsCount": 60,
    "longDescription": "",
    category: CategoryType.beginners
  },
  {
    "id": 5,
    "description": "Advanced JavaScript",
    "imageUrl": "",
    "lessonsCount": 80,
    "longDescription": "",
    category: CategoryType.advanced
  },
  {
    "id": 6,
    "description": "TypeScript for Professionals",
    "imageUrl": "",
    "lessonsCount": 65,
    "longDescription": "",
    category: CategoryType.advanced
  },
  {
    "id": 7,
    "description": "Python Programming Basics",
    "imageUrl": "",
    "lessonsCount": 50,
    "longDescription": "",
    category: CategoryType.beginners
  },
  {
    "id": 8,
    "description": "Machine Learning with Python",
    "imageUrl": "",
    "lessonsCount": 90,
    "longDescription": "",
    category: CategoryType.advanced
  }
]



courseOne = this.courses[0];
courseTwo = this.courses[1];
courseThree = this.courses[2];
  
}
