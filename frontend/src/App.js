import { Navbar } from './components/Navbar';
import './App.css';
import { Body } from './components/Body';
import { Bottom } from './components/Bottom';
import { AddPicture } from './components/AddPicture';
import { useState } from 'react';

function App() {   
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  }; 
  
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearchQuery} onToggleForm={toggleFormVisibility} />
      <Body searchQuery={searchQuery} showForm={showForm} onToggleForm={toggleFormVisibility} />
      <Bottom />
      {showForm && <AddPicture onClose={toggleFormVisibility}/>}
    </div>
  );
}

export default App;
