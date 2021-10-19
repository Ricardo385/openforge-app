import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { loadUsers } from './store/user.actions';
import { getUsers } from './store/user.selector';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  usersList: Observable<User[]>;
  constructor(private store: Store, private apiService: ApiService) {}

  ngOnInit() {
    this.usersList = this.store.select(getUsers);
    this.store.dispatch(loadUsers());
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500);
  }
}
