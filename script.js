let i=0, imgArr=new Array();
imgArr[0]="https://github.com/1123615/senior-high/blob/main/%E9%BB%9E%E7%B7%9A%E9%9D%A2%E6%A7%8B%E6%88%90.jpg?raw=true";
imgArr[1]="https://github.com/1123615/senior-high/blob/main/%E6%A9%A1%E7%9A%AE%E7%AB%A0.jpg?raw=true";
imgArr[2]="https://github.com/1123615/senior-high/blob/main/%E6%A9%A1%E7%9A%AE%E7%AB%A0%E5%8D%B0%E5%87%BA%E4%B9%8B%E6%88%90%E5%93%81.jpg?raw=true";
imgArr[3]="https://github.com/1123615/senior-high/blob/main/%E6%8B%BC%E8%B1%86%E6%9D%AF%E5%A2%8A%20%E9%9B%AA%E8%8A%B1%E7%8B%80.jpg?raw=true";
imgArr[4]="https://github.com/1123615/senior-high/blob/main/%E5%A3%93%E5%85%8B%E5%8A%9B%E7%95%AB%20%E7%99%BD%E8%99%8E.jpg?raw=true";
imgArr[5]="https://github.com/1123615/senior-high/blob/main/%E5%89%B5%E6%84%8F%E5%BD%A2%E8%B1%A1%E5%9C%96.jpg?raw=true";
imgArr[6]="https://github.com/1123615/senior-high/blob/main/%E7%82%BA%E4%BA%86%E4%B8%8D%E9%81%8E%E6%96%BC%E5%96%AE%E8%AA%BF%E6%89%93%E7%9A%84%E4%B8%AD%E5%9C%8B%E7%B5%90.jpg?raw=true";
imgArr[7]="https://github.com/1123615/senior-high/blob/main/%E9%80%81%E7%B5%A6%E6%9C%8B%E5%8F%8B%E7%9A%84%E7%94%9F%E6%97%A5%E7%A6%AE%E7%89%A9%EF%BC%88%E7%86%B1%E7%B8%AE%E7%89%87%20%E5%8D%8A%E6%88%90%E5%93%81%E5%90%8C%E5%BF%83%E7%B5%90.jpg?raw=true";
imgArr[8]="https://github.com/1123615/senior-high/blob/main/%E6%AF%9B%E7%B7%9A%E6%9D%90%E8%B3%AA%E4%B8%AD%E5%9C%8B%E7%B5%90.jpg?raw=true";

function showImg()
{
  document.getElementById("ico").src = imgArr[i];
  i = (i+1) % 8 ;
}

function show()
{
  setInterval(showImg,2000);
}