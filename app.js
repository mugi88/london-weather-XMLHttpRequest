//参考まとめ
//jsの基本：プロゲート
//JavaScriptでAPIを呼び出す方法:https://techacademy.jp/magazine/19615
//無料天気予報APIのOpenWeatherMapを使ってみる:https://qiita.com/nownabe/items/aeac1ce0977be963a740
//JavaScriptのFetch APIを利用してリクエストを送信する：https://sbfl.net/blog/2017/01/29/fetch-api/

//定数
const url = "https://api.openweathermap.org/data/2.5/weather";
const parameter = {
  APPID: "4b5774e9f3d2a07b84f0f2f88e486224",
  q: "London"
};
const id = new URLSearchParams(parameter);

//fetch API
fetch(`${url}?${id}`, {
  method: "GET",
 })
  .then((response) => response.json())
  .then((json) => console.log(json.weather[0].description))
  .catch((error) => console.error(`エラー! (${error})`))