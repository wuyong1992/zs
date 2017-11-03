import {Component, Input, OnInit} from '@angular/core';
import {Banner} from "../model/banner.model";

const Swiper = require("Swiper");


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input()
  bannerUrls: string[];

  constructor() { }

  ngOnInit() {
      let swiperBanner = new Swiper('#swiper-banner', {
        autoplay: 5000,     //自动滚动
        nextButton: '.banner-button-next',
        prevButton: '.banner-button-prev',
        observer: true,
        observeParents: true
      });


  }

}
