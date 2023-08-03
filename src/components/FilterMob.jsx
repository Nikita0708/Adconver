import svg from '../img/svg.svg';
import { FilterEl } from './FilterEl';

export const FilterMob = () => {
  const handleFilter = () => {
    const filter = document.querySelector('.mob-filter');
    const body = document.querySelector('.main');
    filter.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
  };
  return (
    <section className="filter">
      <div className="container">
        <button type="button" className="filter-open" onClick={handleFilter}>
          <img
            src={require('../img/filter.png')}
            className="filter-img"
            alt=""
          />
          <span>Фильтры</span>
        </button>
      </div>
      <div className="mob-filter is-hidden">
        <div className="container">
          <button
            type="button"
            className="menu-close-btn"
            onClick={handleFilter}
          >
            <svg className="menu-icon" width={18} height={18}>
              <use href={svg + '#icon-menu-close-svg'}></use>
            </svg>
          </button>
          <form action="" className="mob-filter-form">
            <FilterEl />
          </form>
        </div>
      </div>
    </section>
  );
};
