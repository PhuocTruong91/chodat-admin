import { urlImg } from '../controller/config';
import noimg from '../image/noimg.png';

export function renderImage(linkImg){
    var result = {};
    var url = urlImg + linkImg;
    var xhttp = new XMLHttpRequest();

    if(typeof(linkImg) === 'string' ? linkImg.indexOf('null') !== -1 : !linkImg){
        return noimg;
    }else{
        return url;
    }

    // xhttp.open("GET", url, true);
    // await xhttp.send();

    // xhttp.onreadystatechange = function() {
    //     if (xhttp.status !== 404) {
    //        result.srcImg = url;
    //     }
    //     else{
    //         result.srcImg = noimg;
    //     }
    // };

}