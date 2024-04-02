import Header from './components/AllHeader/Header'
import Genre from './components/MovieGenre/Genre'
import MMaininfo from './components/Informationaboutfilm/MMaininfo'
import Popularfilms from './components/Differentfilms/Popularfilms'
import Warningblock from './components/WarningAge/Warningblock'
import './App.css'


function App() {
  const values = [
    {name:'Drama'}, 
    {name:'Thriller'},         
    {name:'Supernatural'}
];
  return (
    <>
    <Header></Header>
    <section className='maintext'>
      <div className='strangerthingsmt'>
        <Genre MovieGenres={values}></Genre>
        <MMaininfo></MMaininfo>
        <Popularfilms></Popularfilms>
      </div>
    </section>
    <Warningblock></Warningblock>
    </>
  )
}

export default App
