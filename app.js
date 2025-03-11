const tabsEl = document.querySelector(".tabs");

const btnEl = document.querySelectorAll(".btn");

const articles = document.querySelectorAll(".content");

tabsEl.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    btnEl.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");

    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});
