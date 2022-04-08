// import './App.css'
import Header from './component/Header'
import Main_top from './component/Main_top'
// import Interview from './component/Interview'
// import Interview_form from './component/Interviewform'
import Footer from './component/Footer'


function App() {
  return (
    <div className="App">
      <Header styletype='d1'></Header>
      <Main_top></Main_top>
      {/* 스와이퍼 */}
     {/* <Interview botable="interviewlist" titlenm='사전인터뷰'></Interview> */}
     {/* 포트폴리오 */}
     {/* <Interview_form titlenm='인터뷰글쓰기' botable='interviewwrite'></Interview_form> */}
     {/* <Interview botable="write" titlenm='면접제안'></Interview> */}
     <Footer styletype='family'></Footer>
    </div>
  );
}

export default App;
