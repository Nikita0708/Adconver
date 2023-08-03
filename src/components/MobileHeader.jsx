import s from '../css/mobile-header.module.css';
import svg from '../img/svg.svg';
import openMenuSvg from '../img/menu-open.jpg';
import { MobMenu } from './MobMenu';
import { FilterMob } from './FilterMob';
export const MobileHeader = () => {
  const handleModal = () => {
    const modal = document.querySelector('.mob-menu');
    const body = document.querySelector('.main');
    modal.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
  };
  return (
    <header className={s.header}>
      <div className="container mobile_container">
        <button type="button" className="menu_open_btn" onClick={handleModal}>
          <img src={openMenuSvg} alt="" />
        </button>
        <a href="#reg" className={s.header_link}>
          <svg className="menu_log_in_svg" width={18} height={18}>
            <use href={svg + '#icon-log-in'}></use>
          </svg>
          <strong className={s.header_link_text}>Регистрация</strong>
        </a>
      </div>
      <MobMenu />
      <FilterMob />
    </header>
  );
};
