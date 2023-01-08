$(document).ready(function () {
  const news = [
    {
      title: "Call of Duty®: Infinite Warfare",
      imgPath: "./images/news_1.jpg",
    },
    { title: "Assassin's Creed IV Black Flag", imgPath: "./images/news_2.jpg" },
    { title: "Crysis® 3", imgPath: "./images/news_3.jpg" },
    { title: "The Elder Scrolls V: Skyrim", imgPath: "./images/news_4.jpg" },
    { title: "The Witcher 3: Wild Hunt", imgPath: "./images/news_5.jpg" },
    { title: "Black Desert", imgPath: "./images/news_6.jpg" },
    { title: "King's Bounty: The Legend", imgPath: "./images/news_7.jpg" },
  ];

  const contentBlock = document.querySelector("#content-block"),
    countOfNewsElem = document.getElementById("countOfNewsBlocks"),
    prevPageElem = document.getElementById("prev-page"),
    nextPageElem = document.getElementById("next-page"),
    currentPageEl = document.querySelector("#page-number");

  let pageCount = Math.ceil(news.length / countOfNewsElem.value),
    currentPage = Number(currentPageEl.textContent);

  const ShowNewsBlock = () => {
    CheckChangePage();
    contentBlock.innerHTML = "";
    const countOfNews = countOfNewsElem.value;
    for (
      let i = currentPage * countOfNews - countOfNews;
      i < currentPage * countOfNews && news.length > i;
      i++
    ) {
      let tempDiv = document.createElement("div");
      tempDiv.classList.add("news-block");

      let tempImg = document.createElement("img");
      tempImg.classList.add("news-block__image");
      tempImg.srcset = news[i].imgPath;

      let tempTittle = document.createElement("h1");
      tempTittle.classList.add("news-block__tittle");

      let tempTittleURL = document.createElement("a");
      tempTittleURL.textContent = news[i].title;

      contentBlock.insertAdjacentElement("beforeend", tempDiv);

      tempDiv.insertAdjacentElement("afterbegin", tempImg);
      tempDiv.insertAdjacentElement("beforeend", tempTittle);

      tempTittle.insertAdjacentElement("afterbegin", tempTittleURL);
    }
  };

  const CheckChangePage = () => {
    pageCount = Math.ceil(news.length / countOfNewsElem.value);

    currentPageEl.textContent =
      currentPage.toString() + "/" + pageCount.toString();
    if (pageCount == 1) {
      prevPageElem.disabled = true;
      nextPageElem.disabled = true;
    } else if (currentPage - 1 == 0) {
      prevPageElem.disabled = true;
      nextPageElem.disabled = false;
    } else if (currentPage + 1 > pageCount) {
      nextPageElem.disabled = true;
      prevPageElem.disabled = false;
    } else {
      prevPageElem.disabled = false;
      nextPageElem.disabled = false;
    }
  };

  ShowNewsBlock();

  countOfNewsElem.addEventListener("change", function () {
    currentPage = 1;
    ShowNewsBlock();
  });

  prevPageElem.addEventListener("click", function () {
    currentPage--;
    ShowNewsBlock();
  });

  nextPageElem.addEventListener("click", function () {
    currentPage++;
    ShowNewsBlock();
  });
});
