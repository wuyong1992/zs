import {Component, OnInit} from '@angular/core';
import {BannerService} from "../../service/banner.service";
import {ArticleService} from "../../service/article.service";
import {Article} from "../../model/article.model";

const Swiper = require("Swiper");
const $ = require("jquery");

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerUrls: string[];
  industryArticleList: Article[];
  aboutUsArticle: Article = new Article();
  serviceScopeArticleList: Article[];
  newsCenterArticleList: Article[];
  newsCenterArticle1: Article = new Article();
  newsCenterArticle2: Article = new Article();
  newsCenterArticle3: Article = new Article();
  newsCenterArticle4: Article = new Article();




  constructor(private bannerService: BannerService,
              private articleService: ArticleService) {
  }

  ngOnInit() {
    this.initIndexBanner();

    this.initIndexZsIndustry();

    this.initAboutUs();

    this.initServiceScope();

    this.initNewsCenter();


    // 众生产业横向滚动条
    let swiperZsIndustry = new Swiper('#swiper-zsIndustry', {
      slidesPerView: 3,
      slidesOffsetBefore: 10,
      nextButton: '.myRightBtn',
      prevButton: '.myLeftBtn',
      observer: true,
      observeParents: true
    });

    // 关于我们
    let ab_btn = $(".ab_button");
    ab_btn.mouseenter(function () {
      $(".ab_button_hid").stop().animate({left: "0"})
    });
    ab_btn.mouseleave(function () {
      $(".ab_button_hid").stop().animate({left: "-150"})
    });


    // 业务范围
    let swiperServiceScope = new Swiper('#swiper-serviceScope', {
      slidesPerView: 3,
      slidesOffsetBefore: 10,
      nextButton: '.myRightBtn',
      prevButton: '.myLeftBtn',
      observer: true,
      observeParents: true
    });



    // 联系我们
    let chat1 = $(".chat1");
    chat1.mouseenter(function () {
      $(".chat1").stop().animate({
        opacity: "0"
      })
    });
    chat1.mouseleave(function () {
      $(".chat1").stop().animate({
        opacity: "1"
      })
    });
    chat1.mouseenter(function () {
      $(".wechat_erweima").stop().animate({
        opacity: "1"
      })
    });
    chat1.mouseleave(function () {
      $(".wechat_erweima").stop().animate({
        opacity: "0"
      })
    });

    let bo1 = $(".bo1");
    bo1.mouseenter(function () {
      $(".weibo_erweima").stop().animate({
        opacity: "1"
      })
    });
    bo1.mouseleave(function () {
      $(".weibo_erweima").stop().animate({
        opacity: "0"
      })
    });
    bo1.mouseenter(function () {
      $(".bo1").stop().animate({
        opacity: "0"
      })
    });
    bo1.mouseleave(function () {
      $(".bo1").stop().animate({
        opacity: "1"
      })
    });
    $(".stor").hide();
    $(".phone").mouseenter(function () {
      $(".stor").stop().fadeIn()
    }).mouseleave(function () {
      $(".stor").stop().fadeOut()
    })

  }


  /*初始化banner数据*/
  initIndexBanner() {
    // 初始化banner数据
    this.bannerService.getBannerByPosition(0).subscribe(
      data => {
        if (data.status == 0) {
          this.bannerUrls = data.data;
        }
      },
      error2 => {
      }
    );
  }

  /*初始化众生产业内容*/
  initIndexZsIndustry() {
    this.articleService.findIndexZsIndustry().subscribe(
      data => {
        if (data.status == 0) {
          this.industryArticleList = data.data;
        }
      },
      error2 => {
      }
    );
  }

  /*初始化关于我们的内容*/
  initAboutUs() {
    this.articleService.findIndexAboutUs().subscribe(
      data => {
        if (data.status == 0) {
          this.aboutUsArticle = data.data;
        }
      },
      error2 => {
      }
    );
  }

  /*初始化业务范围内容*/
  initServiceScope() {
    this.articleService.findIndexServiceScope().subscribe(
      data => {
        if (data.status == 0) {
          this.serviceScopeArticleList = data.data;
        }
      },
      error2 => {
      }
    );
  }

  /*初始化新闻中心*/
  initNewsCenter() {
    this.articleService.findIndexNewsCenter().subscribe(
      data => {
        console.log(data);
        if (data.status == 0) {
          this.newsCenterArticleList = data.data;
          this.newsCenterArticle1 = this.newsCenterArticleList[0];
          this.newsCenterArticle2 = this.newsCenterArticleList[1];
          this.newsCenterArticle3 = this.newsCenterArticleList[2];
          this.newsCenterArticle4 = this.newsCenterArticleList[3];
          // 新闻中心
          let nw_left = $(".nw_left");
          nw_left.mouseenter(function () {
            $(".nw_text").children("span").stop().animate({width: "420px"}, 300)
          });
          nw_left.mouseleave(function () {
            $(".nw_text").children("span").stop().animate({width: "460px"}, 300)
          });

          nw_left.mouseenter(function () {
            $(".nw_more").stop().animate({
              top: '-15px',
              opacity: '1',
            })
          });
          nw_left.mouseleave(function () {
            $(".nw_more").stop().animate({
              top: '15px',
              opacity: '0',
            })
          });
          nw_left.mouseenter(function () {
            $(".add1").stop().animate({
              left: "63px"
            })
          });
          nw_left.mouseleave(function () {
            $(".add1").stop().animate({
              left: "-15px"
            })
          });
          nw_left.mouseenter(function () {
            $(".add2").stop().animate({
              top: "12px"
            })
          });
          nw_left.mouseleave(function () {
            $(".add2").stop().animate({
              top: "-50px"
            })
          });

          $.fn.extend({
            nw_right_sm_content: function () {
              let displayLength = 100;
              displayLength = this.attr("displayLength") || displayLength;
              let text = this.text();
              if (!text) return "";

              let result = "";
              let count = 0;
              for (let i = 0; i < displayLength; i++) {
                let _char = text.charAt(i);
                if (count >= displayLength) break;
                if (/[^x00-xff]/.test(_char)) count++; //双字节字符，//[u4e00-u9fa5]中文

                result += _char;
                count++;
              }
              if (result.length < text.length) {
                result += "...";
              }
              this.text(result);
            }
          });

          $(function () {
            $(".nw_right_sm_content").nw_right_sm_content();
          });
          $.fn.extend({
            nw_right_sm_content1: function () {
              let displayLength = 100;
              displayLength = this.attr("displayLength") || displayLength;
              let text = this.text();
              if (!text) return "";

              let result = "";
              let count = 0;
              for (let i = 0; i < displayLength; i++) {
                let _char = text.charAt(i);
                if (count >= displayLength) break;
                if (/[^x00-xff]/.test(_char)) count++; //双字节字符，//[u4e00-u9fa5]中文

                result += _char;
                count++;
              }
              if (result.length < text.length) {
                result += "...";
              }
              this.text(result);
            }
          });

          $(function () {
            $(".nw_right_sm_content1").nw_right_sm_content1();
          });
          $.fn.extend({
            nw_right_sm_content2: function () {
              let displayLength = 100;
              displayLength = this.attr("displayLength") || displayLength;
              let text = this.text();
              if (!text) return "";

              let result = "";
              let count = 0;
              for (let i = 0; i < displayLength; i++) {
                let _char = text.charAt(i);
                if (count >= displayLength) break;
                if (/[^x00-xff]/.test(_char)) count++; //双字节字符，//[u4e00-u9fa5]中文

                result += _char;
                count++;
              }
              if (result.length < text.length) {
                result += "...";
              }
              this.text(result);
            }
          });

          $(function () {
            $(".nw_right_sm_content2").nw_right_sm_content2();
          });

          let nw_right_li = $(".nw_right li");
          nw_right_li.mouseenter(function () {
            $(this).children(".nw_more_sm_hid").stop().animate({left: "0px"});
            $(this).children(".nw_right_sm").stop().animate({left: "10px"});
            $(this).children(".nw_right_sm1").stop().animate({left: "10px"});
            $(this).children(".nw_right_sm2").stop().animate({left: "10px"})

          });
          nw_right_li.mouseleave(function () {
            $(this).children(".nw_more_sm_hid").stop().animate({left: "-40px"});
            $(this).children(".nw_right_sm").stop().animate({left: "0px"});
            $(this).children(".nw_right_sm1").stop().animate({left: "0px"});
            $(this).children(".nw_right_sm2").stop().animate({left: "0px"})
          });
        }
      },
      error2 => {
      }
    );
  }


}

