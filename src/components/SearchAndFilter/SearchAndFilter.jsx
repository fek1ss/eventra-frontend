// // src/components/SearchAndFilter/SearchAndFilter.jsx
// import React from 'react';
// import './SearchAndFilter.css';

// const SearchAndFilter = ({ onSearch, onFilterChange }) => {
//   return (
//     <div className="search-filter-container">
//       <div className="search-bar">
//         <input type="text" placeholder="Поиск событий..." />
//         <button className="search-btn">🔍 Search</button>
//       </div>
      
//       {/* Дополнительная фильтрация (по вашему запросу) */}
//       <div className="filter-options">
//         <label>Категория:</label>
//         <select onChange={(e) => onFilterChange('category', e.target.value)}>
//           <option value="">Все</option>
//           <option value="concert">Концерты</option>
//           <option value="exhibition">Выставки</option>
//           <option value="festival">Фестивали</option>
//           <option value="theater">Театр</option>
//         </select>

//         <label>Тип:</label>
//         <select onChange={(e) => onFilterChange('price', e.target.value)}>
//           <option value="">Все</option>
//           <option value="paid">Платные</option>
//           <option value="free">Бесплатные</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SearchAndFilter;