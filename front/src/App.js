// import './App.css'
import Header from './component/Header'
import Portfolio from './component/Portfolio'
import About from './component/About'
import Interview from './component/Interview_before'
import Form from './component/Form'
// import Interview from './component/Interview'
// import Interview_form from './component/Interviewform'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <Header styletype='d1'></Header>
      <Portfolio></Portfolio>
      <About></About>
      <Interview></Interview>
      <Form></Form>
     {/* <Interview_form titlenm='인터뷰글쓰기' botable='interviewwrite'></Interview_form> */}
     {/* <Interview botable="interviewlist" titlenm='사전인터뷰'></Interview> */}    
     {/* <Interview botable="write" titlenm='면접제안'></Interview> */}
     <Footer styletype='family'></Footer>
    </div>
  );
}

export default App;
