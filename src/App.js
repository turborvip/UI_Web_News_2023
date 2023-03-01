import "./App.css";
// import { useStore } from "../src/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from "./route";
import DefaultLayout from "./Layout/DefaultLayout";

function App() {
  // const [state] = useStore();

  return (
    // <div className="App">
    //   {
    //     state.auth &&
    //     <>
    //       <HeaderCommon />
    //       <Navbar />
    //       <Home />
    //       <FooterCommon />
    //     </>
    //   }

    // </div>
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            const Page = route.component;
            let Layout = route.layout ? route.layout : DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
