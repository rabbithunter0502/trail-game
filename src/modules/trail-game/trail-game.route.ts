import {NgModule} from '@angular/core';
import {TrailGameComponent} from "./trail-game.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {TRAIL_GAME_INJECTION_TOKEN} from "./constants/injection-token.constant";
import {TrailGameService} from "./services/implements/trail-game.service";

export const routes: Routes = [
  {
    path: '',
    component: TrailGameComponent
  }
];

@NgModule({
  declarations: [TrailGameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    {
      provide: TRAIL_GAME_INJECTION_TOKEN,
      useClass: TrailGameService
    }
  ]
})
export class TrailGameRouteModule { }
