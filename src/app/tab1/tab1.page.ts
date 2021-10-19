import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { loadUsers } from './store/user.actions';
import { getUsers } from './store/user.selector';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  usersList: Observable<Users[]>;
  constructor(private store: Store, private route: Router) {}

  ngOnInit() {
    this.usersList = this.store.select(getUsers);
    this.store.dispatch(loadUsers({since: 0}));
  }

  loadData(event) {
    let data: number;
    this.usersList.subscribe((res) => {
      data = parseInt(res[res.length-1].id + 1);
    })
    setTimeout(() => {
      this.store.dispatch(loadUsers({since: data}));
      console.log('Done');
      event.target.complete();
    }, 500);
  }

  goToUser(username) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        username: username,
      }
    };
    this.route.navigate(['/tabs/tab2'], navigationExtras);
  }
}
