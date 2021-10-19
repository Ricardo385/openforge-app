import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset, singleUserLoad } from '../tab1/store/user.actions';
import { getSingleUser } from '../tab1/store/user.selector';
import { User } from '../models/user';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  userSelected: Observable<User[]>;

  constructor(private store: Store, private iab: InAppBrowser) {}

  ngOnInit() {
    this.userSelected = this.store.select(getSingleUser);
    this.store.dispatch(singleUserLoad({ username: 'ricardo385' }));
  }

  searchTerm(ev) {
    this.store.dispatch(reset());
    if (ev.srcElement.value) {
      this.store.dispatch(singleUserLoad({ username: ev.srcElement.value }));
    }
  }

  openWebsite(url) {
    this.iab.create(url);
  }
}
