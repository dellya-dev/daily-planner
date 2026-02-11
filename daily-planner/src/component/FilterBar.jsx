import '../App.css';

import './FilterBar.css'

function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button 
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter ('all') }
      >All</button>

      <button 
        className={filter === 'active' ? 'active' : ''}
        onClick={() => setFilter ('active')}
      >Active</button>

      <button 
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter ('completed')}
      >Completed</button>
  </div>
  )
}

export default FilterBar;