import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

const $ = require("jquery");

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {



  constructor(private router:Router) { }

  ngOnInit() {
    //主导航动效
    //滚动垂直滚动轴滚动时，导航背景色由透明变成白色
    let scroll_H = 0;
    $(window).scroll(function () {
      let scroll_H = $(window).scrollTop();
      if (scroll_H == 0) {
        $(".top_box").css("background-color", "transparent").css("z-index", 2)
      } else {
        $(".top_box").css("background-color", "white").css("z-index", 3)
      }
    });

    // 主导航子菜单展开事件
    let main_nav = $(".main_nav");
    main_nav.children(".not_active").mouseenter(function () {
      $(this).css("color", "#c30b0d").after("<span></span>");
      $(".main_nav span").stop(true, true).animate({height: 3}, 300)
    });
    main_nav.children(".not_active").mouseleave(function () {
      $(this).css("color", "#444");
      $(".main_nav span").stop(true, true).animate({height: 0}, 300);
      $(this).next().remove("span")
    });
    main_nav.mouseenter(function () {
      $(this).children("ul").stop(true, true).slideDown(200)
    });
    main_nav.mouseleave(function(){
      $(this).children("ul").stop(true,true).delay(100).slideUp(200)
    })
  }


}
