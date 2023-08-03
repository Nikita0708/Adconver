import svg from '../img/svg.svg';

export const FilterEl = () => {
  const categories = [
    'Авиатор гембла',
    'Колесо казино',
    'Переписка',
    '2д анимация',
    'Сундки',
    'Стирашки',
    'Стирашки 3 в ряд',
    'Новостные',
    'Лайв съемка',
    'Плинко',
    'Похудение',
    'Потенция',
    'Суставы',
    'Диабет',
    'Увеличение',
  ];
  // const [selectedItem, setSelectedItem] = useState(null);

  const handleTypes = evt => {
    const categories =
      evt.currentTarget.parentElement.querySelectorAll('.categories');
    const svgs =
      evt.currentTarget.parentElement.querySelectorAll('.select_dropdown');
    categories.forEach(categorie => {
      categorie.classList.toggle('categories__disabled');
    });
    svgs.forEach(svg => {
      svg.classList.toggle('select_dropdown__active');
    });
  };
  return (
    <>
      <h1 className="form_title">Фильтры</h1>
      <label htmlFor="search" className="main_label">
        Поиск
      </label>
      <input type="text" name="search" className="main_input" id="search" />
      <div className="form_category">
        <div className="form_select" onClick={handleTypes}>
          <span className="form_item_title">Тип</span>
          <svg className="select_dropdown" width={7} height={3.5}>
            <use href={svg + '#icon-dropdown'}></use>
          </svg>
        </div>
        <div className="categories categories__disabled">
          <ul className="categories_list">
            <li className="categories_item">
              <input
                type="checkbox"
                id="checkbox1"
                name="checkbox"
                className="checkbox"
              />
              <label className="categorie" htmlFor="checkbox1">
                1 Тип
              </label>
            </li>
            <li className="categories_item">
              <input
                type="checkbox"
                id="checkbox2"
                name="checkbox"
                className="checkbox"
              />
              <label className="categorie" htmlFor="checkbox2">
                2 Тип
              </label>
            </li>
          </ul>
        </div>
      </div>
      <label htmlFor="slots" className="main_label">
        Слоты
      </label>
      <input type="text" className="main_input" id="slots" name="slots" />
      <label htmlFor="slides" className="main_label">
        Соотношение сторон
      </label>
      <input type="text" name="slides" id="slides" className="main_input" />
      <div className="form_category">
        <div className="form_select" onClick={handleTypes}>
          <span className="form_item_title">Категории</span>
          <div className="category_amount">
            <span>{categories.length}</span>
          </div>
          <svg className="select_dropdown" width={7} height={3.5}>
            <use href={svg + '#icon-dropdown'}></use>
          </svg>
        </div>
        <div className="categories categories__disabled">
          <ul className="categories_list">
            {categories.map(categorie => {
              return (
                <li className="categories_item">
                  <input
                    id={categorie}
                    type="checkbox"
                    name="checkbox"
                    className="checkbox"
                  />
                  <label className="categorie" htmlFor={categorie}>
                    {categorie}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="form_category">
        <div className="form_select" onClick={handleTypes}>
          <span className="form_item_title">Подходы</span>
          <svg className="select_dropdown" width={7} height={3.5}>
            <use href={svg + '#icon-dropdown'}></use>
          </svg>
        </div>
        <div className="categories categories__disabled">
          <ul className="categories_list">
            <li className="categories_item">
              <input
                type="checkbox"
                name=""
                className="checkbox"
                id="checkbox4"
              />
              <label className="categorie" htmlFor="checkbox4">
                1 Подход
              </label>
            </li>
            <li className="categories_item">
              <input
                type="checkbox"
                name=""
                id="checkbox5"
                className="checkbox"
              />
              <label className="categorie" htmlFor="checkbox5">
                2 Подход
              </label>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="submit"
        className="form_btn"
        onClick={evt => evt.preventDefault()}
      >
        Применить
      </button>
    </>
  );
};
