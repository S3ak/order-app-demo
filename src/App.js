import React from "react";
import Layout from "./components/displays/layout";

import Timer from "./components/displays/timer";
import Section from "./components/displays/section";
import OrderDetails from "./components/controls/order-details";
import OrderAddress from "./components/controls/order-address";
import Button from "./components/controls/button";

import mockOrderDetailsList from "./utils/mocks/mock-order-details-list";

function App() {
  const handleOnDeliverAction = () => {
    console.warn("User clicked ready to deliver");
  };

  return (
    <Layout>
      <Timer
        time="08:05"
        description="minutes remaining"
        currentProgressVal="0.6"
      />

      <Section>
        <OrderDetails list={mockOrderDetailsList} />
      </Section>

      <OrderAddress
        title="McDonald’s Rondebosch"
        description="51 Main Rd, Rondebosch, Cape Town, 7700"
      />

      <Section>
        <Button onClick={handleOnDeliverAction} isFullWidth>
          Ready to deliver
        </Button>
      </Section>
    </Layout>
  );
}

export default App;
