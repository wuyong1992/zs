import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";


@Injectable()
export class ArticleService {

  findIndexZsIndustryURL = environment.findIndexZsIndustryUrl;
  findIndexAboutUsURL = environment.findIndexAboutUsUrl;
  findIndexServiceScopeURL = environment.findIndexServiceScopeUrl;
  findIndexNewsCenterURL = environment.findIndexNewsCenterUrl;

  constructor(private http: Http) {}

  /*获取首页众生产业中的文章*/
  public findIndexZsIndustry(){
    return this.http.get(this.findIndexZsIndustryURL).map(this.extractData).catch(this.handleError);
  }

  /*获取关于我们的文章信息*/
  public findIndexAboutUs(){
    return this.http.get(this.findIndexAboutUsURL).map(this.extractData).catch(this.handleError);
  }

  /*获取业务范围文章信息*/
  public findIndexServiceScope(){
    return this.http.get(this.findIndexServiceScopeURL).map(this.extractData).catch(this.handleError);
  }

  /*获取新闻中心中的数据*/
  public findIndexNewsCenter(){
    return this.http.get(this.findIndexNewsCenterURL).map(this.extractData).catch(this.handleError);
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
