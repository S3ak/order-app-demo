import React from "react";
import GlobalStyles from "./utils/styles/global-styles";

const Header = () => (
  <div>
    <h1>Collect order</h1> <div>helper</div>
  </div>
);

const Timer = () => (
  <div>
    <div>08:05</div>
    <p>minutes remaining</p>
    <div> - </div>
  </div>
);

const List = () => (
  <article>
    <div>
      <h2>Collect order #093</h2>
      <p>Pick up instructions</p>
      <p>Go to counter 1 on the left where the sign for ‘all pickups’ is</p>
      <hr />
    </div>

    <div>
      <h3>BigMac Meal</h3>

      <p>Large Fanta, Super Size Fries</p>
      <hr />
    </div>
  </article>
);

const CollectLocation = () => (
  <div>
    <h2>McDonald’s Rondebosch</h2>
    <p>51 Main Rd, Rondebosch, Cape Town, 7700</p>
    <div>
      <button>⤴ Directions</button>
      <button>Call</button>
    </div>
  </div>
);

const CTASection = () => (
  <div>
    <button>Ready to deliver</button>
  </div>
);

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />

      <Timer />
      <List />

      <CollectLocation />
      <CTASection />
    </div>
  );
}

export default App;
