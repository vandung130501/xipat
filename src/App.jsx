import { Button, Card, Icon, Tabs, Text } from "@shopify/polaris";
import { TextIcon } from "@shopify/polaris-icons";
import { useEffect, useState } from "react";
import "./App.css";
import {
  initDeliveryDate,
  initStorePickup,
  initWidgetAppearance,
  initWidgetPosition,
} from "./appConst";
import { WidgetApperance } from "./component/WidgetApperance";
import { WidgetPosition } from "./component/WidgetPosition";
import { DeliveryDateTab } from "./component/tabs/DeliveryDateTab";
import { StorePickupTab } from "./component/tabs/StorePickupTab";

const TAB = [
  {
    id: "deliveryDate",
    content: "Delivery Date",
    accessibilityLabel: "All customers",
    panelID: "",
  },
  {
    id: "storePickUp",
    content: "Store Pickup",
    panelID: "",
  },
];
const TAB_VALUE = {
  DELIVERY_DATE: 0,
  STORE_PICKUP: 1,
};
function App() {
  const [selectedTab, setSelectedTab] = useState(TAB_VALUE.DELIVERY_DATE);
  const [showButton, setShowButton] = useState(false);
  const [widgetPosition, setWidgetPosition] = useState(initWidgetPosition);
  const [widgetAppearance, setWidgetAppearance] =
    useState(initWidgetAppearance);
  const [deliveryDate, setDeliveryDate] = useState(initDeliveryDate);
  const [storePickup, setStorePickup] = useState(initStorePickup);
  const [deliveryError, setDeliveryError] = useState({
    title: false,
    dateLabel: false,
    dateTitle: false,
  });
  useEffect(() => {
    setShowButton(true);
  }, [deliveryDate, storePickup, widgetPosition, widgetAppearance]);
  const handleSubmit = () => {
    if (!deliveryDate?.title) {
      setDeliveryError({ ...deliveryError, title: true });
      return;
    } else {
      setDeliveryError({ ...deliveryError, title: false });
    }
    console.log("widgetPosition", widgetPosition);
    console.log("widgetAppearance", widgetAppearance);
    console.log("deliveryDate", deliveryDate);
    console.log("storePickup", storePickup);
  };
  const handleClear = () => {
    setWidgetPosition(initWidgetPosition);
    setWidgetAppearance(initWidgetAppearance);
    setDeliveryDate(initDeliveryDate);
    setStorePickup(initStorePickup);
    setShowButton(false);
  };
  return (
    <>
      {showButton && (
        <div className="action">
          <Text as="span" variant="bodySm" tone="text-inverse">
            Unsaved changes
          </Text>
          <div className="button">
            <Button variant="primary" onClick={handleClear}>
              Discard
            </Button>
            <Button variant="secondary" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        </div>
      )}
      <div className="main">
        <Text as="h1" variant="headingXl">
          Widget setting
        </Text>
        <WidgetPosition
          widgetAppearance={widgetAppearance}
          widgetPosition={widgetPosition}
          setWidgetPosition={setWidgetPosition}
        />
        <WidgetApperance
          widgetAppearance={widgetAppearance}
          setWidgetAppearance={setWidgetAppearance}
        />
        <Card background="bg-surface">
          <div className="flex-start">
            <Icon source={TextIcon} tone="textCritical" />
            <Text as="span" variant="headingSm" tone="critical">
              Widget text
            </Text>
          </div>
          <Tabs
            tone="textCritical"
            tabs={TAB}
            selected={selectedTab}
            onSelect={(tab) => {
              setSelectedTab(tab);
            }}
            fitted
          >
            {selectedTab === TAB_VALUE.DELIVERY_DATE && (
              <DeliveryDateTab
                deliveryDate={deliveryDate}
                deliveryError={deliveryError}
                setDeliveryDate={setDeliveryDate}
                widgetAppearance={widgetAppearance}
              />
            )}
            {selectedTab === TAB_VALUE.STORE_PICKUP && (
              <StorePickupTab
                widgetAppearance={widgetAppearance}
                storePickup={storePickup}
                setStorePickup={setStorePickup}
              />
            )}
          </Tabs>
        </Card>
      </div>
    </>
  );
}

export default App;
