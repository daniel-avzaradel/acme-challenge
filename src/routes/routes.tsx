import { Switch, Route, BrowserRouter } from "react-router-dom";

import UserList from "../components/UserList";
import UserModal from "../components/UserModal/UserModal";
import Header from "../components/Header/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <UserList />
      <Switch>
        <Route path="/:id" component={UserModal} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
