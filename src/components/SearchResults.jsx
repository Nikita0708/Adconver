import SearchImg from '../img/search-img.jpg';

export const SearchResults = () => {
  const searchItems = [
    {
      bought: 0,
      imgUrl: SearchImg,
      title: 'Лот #1239',
      description: 'Комментарий комментарий комментарий',
      price: '18.00',
    },
    {
      bought: 0,
      imgUrl: SearchImg,
      title: 'Лот #1239',
      description: 'Комментарий комментарий комментарий',
      price: '18.00',
    },
    {
      bought: 0,
      imgUrl: SearchImg,
      title: 'Лот #1239',
      description: 'Комментарий комментарий комментарий',
      price: '18.00',
    },
    {
      bought: 0,
      imgUrl: SearchImg,
      title: 'Лот #1239',
      description: 'Комментарий комментарий комментарий',
      price: '18.00',
    },
    {
      bought: 0,
      imgUrl: SearchImg,
      title: 'Лот #1239',
      description: 'Комментарий комментарий комментарий',
      price: '18.00',
    },
    {
      bought: 0,
      imgUrl: SearchImg,
      title: 'Лот #1239',
      description: 'Комментарий комментарий комментарий',
      price: '18.00',
    },
    {
      bought: 0,
      imgUrl: SearchImg,
      title: 'Лот #1239',
      description: 'Комментарий комментарий комментарий',
      price: '18.00',
    },
    {
      bought: 0,
      imgUrl: SearchImg,
      title: 'Лот #1239',
      description: 'Комментарий комментарий комментарий',
      price: '18.00',
    },
  ];
  return (
    <div className="results">
      <h1 className="results_title">Найдено 100 креативов</h1>
      <ul className="search_list">
        {searchItems.map(({ bought, imgUrl, title, description, price }) => {
          return (
            <li className="search_item">
              <span className="search_top_text">
                <span>
                  Купили <strong>{bought}</strong> раз
                </span>
              </span>
              <img src={imgUrl} alt="" className="search_img" />
              <div className="search_mid_wrap">
                <span className="search_item_title">{title}</span>
                <span className="search_item_mid_span">1:1</span>
              </div>
              <p className="search_item_text">{description}</p>
              <div className="search_bottom_wrap">
                <span className="search_price">${price}</span>
                <button type="button" className="search_btn">
                  Подробнее
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
