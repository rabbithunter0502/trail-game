import {Observable} from "rxjs";
import {ScenesModel} from "../../models/scenes.model";

export interface ITrailGameInterface {
  getScenesConfig(): Observable<ScenesModel>
}
