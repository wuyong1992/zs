import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BannerService {

  getBannersByPositionURL = environment.getBannersByPositionUrl;

  constructor(private http: Http) {
  }


  /*根据相应位置获取banner*/
  public getBannerByPosition(position: number) {
    let data = new URLSearchParams();
    data.append("position", position + "");
    return this.http.post(this.getBannersByPositionURL, data)
      .map(this.extractData)
      .catch(this.extractData);
  }


  //从可观察对象中提取数据
  private extractData(res: Response) {
    return res.json();
  }

  //http异常捕捉
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
