import Title from './components/title/title';
import Header from './components/header/header';
import Article from './components/article/article';

function App() {

  const firstTitle = "First article"
  return (
    <div id="App">
      <Header/>
      <main>
      <Title/>
      <Article title={firstTitle} content={"blablabla lorem ipsum blabla"}/>
      <Article title={"Second article"} content={"second blablabla lorem ipsum blabla"}/>
      <Article title={"Cristi chiar se pricepe la trainning"} content={"dar si clasa e buna"}/>
      <Article />
      <Article />
      <Article />
      </main>
    </div>
  );
}

export default App;
