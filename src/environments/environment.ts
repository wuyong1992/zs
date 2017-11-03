// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  /*banner*/
  getBannersByPositionUrl: "http://localhost:8080/web/banner/get_banner",


  /*article*/
  findIndexZsIndustryUrl: "http://localhost:8080/web/article/get_index_ZsIndustry",
  findIndexAboutUsUrl: "http://localhost:8080/web/article/get_index_aboutUs",
  findIndexServiceScopeUrl: "http://localhost:8080/web/article/get_index_serviceScope",
  findIndexNewsCenterUrl: "http://localhost:8080/web/article/get_index_newsCenter"
};
