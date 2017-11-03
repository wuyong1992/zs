import {Component, OnInit} from '@angular/core';
import {BannerService} from "../../service/banner.service";

const $ = require("jquery");

@Component({
  selector: 'app-zs-industry',
  templateUrl: './zs-industry.component.html',
  styleUrls: ['./zs-industry.component.scss']
})
export class ZsIndustryComponent implements OnInit {

  constructor(private bannerService:BannerService) { }
  bannerUrls: string[];

  ngOnInit() {
    this.initZsIndustryBanner();




    $(function () {
      $('.industry_small').hover(function () {
        $('.line', this).stop().css('height', '2px');
        $('.line', this).animate({
          left: '0',
          width: '100%',
          right: '0'
        }, 300);
      }, function () {
        $('.line', this).stop().animate({
          left: '50%',
          width: '0'
        }, 300);
      });
    });

    let industry_small = $(".industry_small");
    industry_small.mouseenter(function () {
      $(this).children(".more").stop().fadeIn(500)
    });
    industry_small.mouseleave(function () {
      $(this).children(".more").stop().fadeOut(500)
    })
  }



  /*初始化banner数据*/
  initZsIndustryBanner() {
    this.bannerService.getBannerByPosition(1).subscribe(
      data => {
        if (data.status == 0) {
          this.bannerUrls = data.data;
        }
      },
      error2 => {
      }
    );
  }

  /*分页化文章信息*/


}
