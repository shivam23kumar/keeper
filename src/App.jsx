import './App.css';
import Header from './header';
import Notes from './notes';
import Footer from './footer';
import Note from './note';



function App() {
  return (
    <div className="App">
      <Header/>
      {Note.map(item =>(
        <Notes
        key={item.key}
        title={item.title}
        content={item.content}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
