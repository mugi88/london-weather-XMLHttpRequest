//XMLHttpRequestで書きます！
//参考：https://www.sejuku.net/blog/30245
//参考：CORSポリシー:https://yukimonkey.com/fix-error/cros1/

//Pythonでローカルサーバー：https://qiita.com/okhrn/items/4d3c74563154f191ba16
//サーバー立ち上げて確認したときに使ったmemo const PORT =  "mugi-MacBook-Pro.local";

var xhr = new XMLHttpRequest();
var url = "https://api.openweathermap.org/data/2.5/weather?APPID=4b5774e9f3d2a07b84f0f2f88e486224&q=London";

xhr.responseType = 'json';
xhr.open("GET",url);
xhr.send();

xhr.onreadystatechange = function()
{
    if( xhr.readyState == 4 && xhr.status == 200 )
    {
        if( xhr.response )
        {
            console.log(xhr.response["weather"][0]["description"]);
        }
    }
};