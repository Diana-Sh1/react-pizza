import '../src/scss/app.scss';
import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <NotFound/>
                </div>
            </div>
        </div>
    )
}

export default App;
