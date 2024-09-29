import { Component } from '@angular/core';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class FruitsComponent {
  apple = {
    id: 1,
    name: "Apple",
    pic: "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=acFVqLYdwzZQ4WQRre3MUKW9PCMewLldoMVEXLyplkM="
  };

  orange = {
    id: 2,
    name: "Orange",
    pic: "https://media.istockphoto.com/id/1357864202/photo/mandarine-orange-fruits-or-tangerines-isolated-on-white-background-fresh-mandarine-close-up.jpg?b=1&s=612x612&w=0&k=20&c=Nmwb013cZAQ6UeO033bKe90RThXlZ2gTODL5VQxqA6k="
  };

  grapes = {
    id: 3,
    name: "Grapes",
    pic: "https://media.istockphoto.com/id/682505832/photo/ripe-red-grape-pink-bunch-with-leaves-isolated-on-white-with-clipping-path-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=FV-KZqPFwi09flA5ZokOT4Pg2-1rbge1epBRpvqTLJY="
  };

}
