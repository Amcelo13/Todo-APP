import React, { useEffect, useState } from "react";
//In function based we dont use componentdidMount we use useEffect hook

export default function NewsUsingFunctionalComp() {
  const [News, setNews] = useState([]);
  let GetNews = async () => {
    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=659cc10e45524ab7aec2c9acc5a125cc"
    );
    let jsondata = data.json();
    console.log(jsondata);
    setNews(jsondata.articles);
  };

  //useffect function for API CALLING In Functional Based Component
  useEffect(() => {
    GetNews();
  });
  return <div className="container">Functional Component</div>;
}
