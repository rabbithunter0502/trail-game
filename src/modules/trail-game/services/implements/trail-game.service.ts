import {Injectable} from "@angular/core";
import {ITrailGameInterface} from "../intefaces/trail-game.interface";
import {HttpClient} from "@angular/common/http";
import {ScenesModel} from "../../models/scenes.model";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class TrailGameService implements ITrailGameInterface {
  constructor(protected httpClient: HttpClient) {
  }

  getScenesConfig(): Observable<ScenesModel> {
    return this.httpClient.get<ScenesModel>(environment.scenesConfig);
  }
}
