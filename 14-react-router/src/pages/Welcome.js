import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <Route path="/welcome">
        <h2>Welcome</h2>
      </Route>
      <Route path="/welcome/aaa">
        <h2>Welcome AAA</h2>
      </Route>
    </section>
  );
};

export default Welcome;
