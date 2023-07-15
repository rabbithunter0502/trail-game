import {Component, Inject, OnInit} from '@angular/core';
import scenesData from '../../assets/scenes.json';
import {trigger, transition, query, style, animate, group} from '@angular/animations';
import {TRAIL_GAME_INJECTION_TOKEN} from "./constants/injection-token.constant";
import {ITrailGameInterface} from "./services/intefaces/trail-game.interface";
import {Subscription, tap} from "rxjs";
import {ScenesItemModel, ScenesModel} from "./models/scenes.model";
import {Router} from "@angular/router";

const left = [
  query(':enter, :leave', style({position: 'fixed', width: '200px'}), {optional: true}),
  group([
    query(':enter', [style({transform: 'translateX(-200px)'}), animate('.3s ease-out', style({transform: 'translateX(0%)'}))], {
      optional: true,
    }),
    query(':leave', [style({transform: 'translateX(0%)'}), animate('.3s ease-out', style({transform: 'translateX(200px)'}))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({position: 'fixed', width: '200px'}), {optional: true}),
  group([
    query(':enter', [style({transform: 'translateX(200px)'}), animate('.3s ease-out', style({transform: 'translateX(0%)'}))], {
      optional: true,
    }),
    query(':leave', [style({transform: 'translateX(0%)'}), animate('.3s ease-out', style({transform: 'translateX(-200px)'}))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-trail-game',
  templateUrl: './trail-game.component.html',
  styleUrls: ['./trail-game.component.scss'],

})
export class TrailGameComponent implements OnInit {
  //#region Properties
  scenes: ScenesItemModel[];

  currentSceneIndex: number = 0;

  // Moving image with left position and start at middle
  positionLeft = 50;

  private _subscription = new Subscription();

  //#endregion

  //#region Constructor
  constructor(@Inject(TRAIL_GAME_INJECTION_TOKEN) protected trailGameService: ITrailGameInterface,
              protected router: Router) {
  }
  //#endregion

  //#region Methods
  ngOnInit() {
    // Load the initial scene
    const loadPageConfigSubscription = this.trailGameService.getScenesConfig()
      .pipe(
        tap(response => {
          this.scenes = response?.scenes;
        })
      )
      .subscribe()
    this._subscription.add(loadPageConfigSubscription);
    this.gotoScene(this.currentSceneIndex);
  }

  ngOnDestroy() {
    if (!this._subscription?.closed) {
      this._subscription.unsubscribe();
    }
  }

  gotoScene(index: number) {
    if (this.currentSceneIndex !== index) {
      this.currentSceneIndex = index;
    }
  }

  // launches a move in one direction (-1 for left, 1 for right)
  move(direction: number): void {
    this.positionLeft += direction;
    if (this.positionLeft <= 0) this.positionLeft = 0;
    if (this.positionLeft >= 100) this.positionLeft = 100;
    console.log(this.positionLeft)
  }

  //#endregion

}
