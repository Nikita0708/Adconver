import svg from '../img/svg.svg';

export const MobMenu = () => {
  const handleModal = () => {
    const modal = document.querySelector('.mob-menu');
    const body = document.querySelector('.main');
    modal.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
  };
  return (
    <div className="mob-menu is-hidden">
      <div className="container">
        <button type="button" className="menu-close-btn" onClick={handleModal}>
          <svg className="menu-icon" width={18} height={18}>
            <use href={svg + '#icon-menu-close-svg'}></use>
          </svg>
        </button>
        <ul className="mob-menu-list">
          <li className="mob-menu-item">
            <a href="#Main" className="mob-menu-link">
              Главная
            </a>
          </li>
          <li className="mob-menu-item">
            <a href="#Works" className="mob-menu-link">
              Работы
            </a>
          </li>
          <li className="mob-menu-item">
            <a href="#Landings" className="mob-menu-link">
              Лендинги
            </a>
          </li>
          <li className="mob-menu-item">
            <a href="#Help" className="mob-menu-link">
              Поддержка
            </a>
          </li>
          <li className="mob-menu-item">
            <a
              href="#Marketplace"
              className="mob-menu-link mob-menu-link__active"
            >
              Маркетплейс
            </a>
          </li>
          <li className="mob-menu-item">
            <a href="#Profile" className="mob-menu-link">
              Личный кабинет
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
