import { Filter } from './Filter';
import { SearchResults } from './SearchResults';

export const MainPage = () => {
  return (
    <main className="main">
      <div className="main_container">
        <Filter />
        <SearchResults />
      </div>
    </main>
  );
};
