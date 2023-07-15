import {InjectionToken} from "@angular/core";
import {ITrailGameInterface} from "../services/intefaces/trail-game.interface";

export const TRAIL_GAME_INJECTION_TOKEN = new InjectionToken<ITrailGameInterface>('token for trail game service')
