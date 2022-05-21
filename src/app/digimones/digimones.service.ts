import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http'

@Injectable()

export class DigimonesServices
{
    private API_SERVER = "https://digimon-api.vercel.app/api/digimon"; //aca tenemos el end point

    constructor(public http: HttpClient){}
    public getDigimones():Observable<any>
    {
        return this.http.get(this.API_SERVER); //retornamos htt get y el endpoint
    }
}