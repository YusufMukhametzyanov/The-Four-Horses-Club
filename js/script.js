const supportContainer = document.querySelector(".support__container");
const transformList = document.querySelector(".transform__list");
const transformBtnRight = document.querySelector(
  ".transform__toolbar-item-right"
);
const transformBtnLeft = document.querySelector(
  ".transform__toolbar-item-left"
);
const transformCircle1 = document.querySelector(
  ".transform__toolbar-item-circle-1"
);
const transformCircle2 = document.querySelector(
  ".transform__toolbar-item-circle-2"
);
const transformCircle3 = document.querySelector(
  ".transform__toolbar-item-circle-3"
);
const transformCircle4 = document.querySelector(
  ".transform__toolbar-item-circle-4"
);
const transformCircle5 = document.querySelector(
  ".transform__toolbar-item-circle-5"
);

console.log(transformList.scrollWidth);

if (matchMedia) {
  let screen = window.matchMedia("(max-width:576px)");
  screen.addListener(changes);
  changes(screen);
}

function changes(screen) {
  if (screen.matches) {
    supportContainer.innerHTML = `
    <div class="support__top flex">
              <h3 class="support__title margin-reset">
                Чтобы поддержать Международный васюкинский турнир
              </h3>
              <img class="support__top-img" src="img/support-img-head.png" aria-hidden="true">
              <h3 class="support__title support__title-bottom margin-reset">
                посетите лекцию на&nbsp;тему:
                <span class="support__title_accent">&laquo;Плодотворная дебютная идея&raquo;</span>
              </h3>
            </div>
            <div class="support__bottom flex">
              <div class="support__bottom-content">
                <div class="support__descr">
                  <h3 class="support__title support__bottom-title margin-reset">и&nbsp;Сеанс <span
                      class="support__title_accent">одновременной игры
                      в&nbsp;шахматы на&nbsp;160 досках</span> гроссмейстера О.&nbsp;Бендера</h3>
                </div>
                <ul class="support__list list-reset">
                  <li class="support__item flex">
                    <span class="support__item-caption">Место проведения:</span>
                    <span class="support__item-value">Клуб &laquo;Картонажник&raquo;</span>
                  </li>
                  <li class="support__item flex">
                    <span class="support__item-caption">Дата и&nbsp;время мероприятия:</span>
                    <span class="support__item-value">22&nbsp;июня 1927&nbsp;г.&nbsp;в&nbsp;18:00</span>
                  </li>
                  <li class="support__item flex">
                    <span class="support__item-caption">Стоимость входных билетов:</span>
                    <span class="support__item-value">20&nbsp;коп.</span>
                  </li>
                  <li class="support__item flex">
                    <span class="support__item-caption">Плата за&nbsp;игру:</span>
                    <span class="support__item-value">50&nbsp;коп.</span>
                  </li>
                  <li class="support__item flex">
                    <span class="support__item-caption">Взнос на&nbsp;телеграммы:</span>
                    <span class="support__item-value"><span class="support__item_crossout">100&nbsp;руб.</span>
                      21&nbsp;руб.&nbsp;16&nbsp;коп.</span>
                  </li>
                  <li class="support__question">По&nbsp;всем вопросам обращаться в&nbsp;администрацию
                    к&nbsp;К.&nbsp;Михельсону
                  </li>
                </ul>
              </div>
            </div>
    `;
  } else {
    supportContainer.innerHTML = `
    <div class="support__top flex">
          <h3 class="support__title margin-reset">
            Чтобы поддержать Международный васюкинский турнир посетите лекцию на&nbsp;тему:
            <span class="support__title_accent">&laquo;Плодотворная дебютная идея&raquo;</span>
          </h3>
          <img class="support__top-img" src="img/support-img-head.png" aria-hidden="true">
        </div>
        <div class="support__bottom flex">
          <div class="support__bottom-content">
            <div class="support__descr">
              <h3 class="support__title support__bottom-title margin-reset">и&nbsp;Сеанс <span
                  class="support__title_accent">одновременной игры
                  в&nbsp;шахматы на&nbsp;160 досках</span> гроссмейстера О.&nbsp;Бендера</h3>
            </div>
            <ul class="support__list list-reset">
              <li class="support__item">
                <span class="support__item-caption">Место проведения:</span>
                <span class="support__item-value">Клуб &laquo;Картонажник&raquo;</span>
              </li>
              <li class="support__item">
                <span class="support__item-caption">Дата и&nbsp;время мероприятия:</span>
                <span class="support__item-value">22&nbsp;июня 1927&nbsp;г.&nbsp;в&nbsp;18:00</span>
              </li>
              <li class="support__item">
                <span class="support__item-caption">Стоимость входных билетов:</span>
                <span class="support__item-value">20&nbsp;коп.</span>
              </li>
              <li class="support__item">
                <span class="support__item-caption">Плата за&nbsp;игру:</span>
                <span class="support__item-value">50&nbsp;коп.</span>
              </li>
              <li class="support__item">
                <span class="support__item-caption">Взнос на&nbsp;телеграммы:</span>
                <span class="support__item-value"><span class="support__item_crossout">100&nbsp;руб.</span>
                  21&nbsp;руб.&nbsp;16&nbsp;коп.</span>
              </li>
              <li class="support__question">По&nbsp;всем вопросам обращаться в&nbsp;администрацию
                к&nbsp;К.&nbsp;Михельсону
              </li>
            </ul>
          </div>
        </div>
        `;
  }
}

transformCircle1.addEventListener("click", function (e) {
  transformList.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

transformCircle2.addEventListener("click", function (e) {
  transformList.scrollTo({ top: 0, left: 355, behavior: "smooth" });
});

transformCircle3.addEventListener("click", function (e) {
  transformList.scrollTo({ top: 0, left: 710, behavior: "smooth" });
});

transformCircle4.addEventListener("click", function (e) {
  transformList.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

transformCircle5.addEventListener("click", function (e) {
  transformList.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// transformBtnLeft.addEventListener("click", function (e) {
//   transformList. = 0;
// });
