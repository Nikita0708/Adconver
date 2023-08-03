export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <ul className="header_list">
            <li className="header_item">
              <a href="#Main" className="header-link">
                Главная
              </a>
            </li>
            <li className="header_item">
              <a href="#Works" className="header-link">
                Работы
              </a>
            </li>
            <li className="header_item">
              <a href="#Landings" className="header-link">
                Лендинги
              </a>
            </li>
            <li className="header_item">
              <a href="#Help" className="header-link">
                Поддержка
              </a>
            </li>
            <li className="header_item">
              <a
                href="#Marketplace"
                className="header-link header-link__active"
              >
                Маркетплейс
              </a>
            </li>
            <li className="header_item">
              <a href="#Profile" className="header-link">
                Личный кабинет
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
