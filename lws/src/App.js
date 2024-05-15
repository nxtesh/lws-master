import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import ChatsPage from "./components/chat/ChatsPage";
import VideoChat from "./components/videoChat/VideoChat";
import Signup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import Cookies from "js-cookie";

function App() {
  const user = Cookies.get("username");
  console.log(user, "ts is username");
  return (
    <>
      <Router>
        <Switch>
          {/* Routes without header and footer */}
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/meeting" component={VideoChat} />
          {/* <Route exact path="/chats" component={ChatsPage} /> */}
          <Route
            exact
            path="/chats"
            render={() => (user ? <ChatsPage user={user} /> : <Login />)}
          />

          {/* Routes with header and footer */}
          <Route>
            <>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/courses" component={CourseHome} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
              <Footer />
            </>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
