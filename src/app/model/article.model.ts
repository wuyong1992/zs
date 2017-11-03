
export class Article {

  id?: number;
  title: string;
  enTitle: string;
  titleHighlight: number;
  thumbnail: string;
  introduction: string;
  position: number;
  content: string;
  //categoryId: number;
  //authorId: number;
  sort: number;
  status: number;
  recommend: number;  //是否推荐 0 不推荐 1 推荐
  showIndex: number;  //是否首页显示 0 不显示 1 显示
  hits: number;       //点击数
  createTime: Date;
  updateTime: Date;

}
