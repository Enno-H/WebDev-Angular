import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;

  constructor(private dishService: DishService,@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
                 errmess => this.errMess = <any>errmess);
  }

}
