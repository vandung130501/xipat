import {
  Card,
  Checkbox,
  Grid,
  Icon,
  Select,
  Text,
  TextField,
  Tabs,
  Button,
} from "@shopify/polaris";
import {
  IconsFilledIcon,
  PaintBrushFlatIcon,
  TextIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";
import "./App.css";
import {
  dateFormatOptions,
  daysOfWeekOptions,
  humanLanguagesOptions,
  initDeliveryDate,
  initStorePickup,
  initWidgetAppearance,
  initWidgetPosition,
  options,
} from "./appConst";

const tabs = [
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
function App() {
  const [selectedTab, setSelectedTab] = useState(0);
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

  const handleChangeWidgetAppearance = (field, value) => {
    setWidgetAppearance((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    setShowButton(true);
  };
  const handleChangeDeliveryDate = (field, value) => {
    setDeliveryDate({
      ...deliveryDate,
      [field]: value,
    });
    setShowButton(true);
  };
  const handleChangeStorePickup = (field, value) => {
    setStorePickup({
      ...storePickup,
      [field]: value,
    });
    setShowButton(true);
  };
  const handlePositionChange = (field, value) => {
    setWidgetPosition((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    setShowButton(true);
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
        {/* <Form onSubmit={handleSubmit}>
          <FormLayout> */}
        <Card background="bg-surface">
          <div className="flex-start">
            <Icon source={IconsFilledIcon} tone="textCritical" />
            <Text as="span" variant="headingSm" tone="critical">
              Widget position
            </Text>
          </div>
          <div>
            <Checkbox
              label={
                <span style={{ color: widgetAppearance.titleColor }}>
                  Show the calendar at the product page
                </span>
              }
              checked={widgetPosition.isShow}
              onChange={(event) => handlePositionChange("isShow", event)}
            />
          </div>
          <Checkbox
            label={
              <span style={{ color: widgetAppearance.titleColor }}>
                Required the delivery date before checkout
              </span>
            }
            checked={widgetPosition.isRequired}
            onChange={(event) => handlePositionChange("isRequired", event)}
          />
        </Card>
        <Card background="bg-surface">
          <div className="flex-start">
            <Icon source={PaintBrushFlatIcon} tone="textCritical" />
            <Text as="span" variant="headingSm" tone="critical">
              Widget appearance
            </Text>
          </div>
          <Grid gap={{ xl: "6px" }}>
            <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Select
                label={
                  <span style={{ color: widgetAppearance.titleColor }}>
                    Layout
                  </span>
                }
                options={options}
                onChange={(value) =>
                  handleChangeWidgetAppearance("selected", value)
                }
                value={widgetAppearance.selected}
              />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Select
                label={
                  <span style={{ color: widgetAppearance.titleColor }}>
                    Calendar layout
                  </span>
                }
                options={options}
                onChange={(value) =>
                  handleChangeWidgetAppearance("selected", value)
                }
                value={widgetAppearance.selected}
              />
              <Checkbox
                label={
                  <span style={{ color: widgetAppearance.titleColor }}>
                    Always open the calendar
                  </span>
                }
                checked={widgetAppearance.isAlwaysOpen}
                onChange={(event) =>
                  handleChangeWidgetAppearance("isAlwaysOpen", event)
                }
              />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Select
                label={
                  <span style={{ color: widgetAppearance.titleColor }}>
                    Calendar language
                  </span>
                }
                options={humanLanguagesOptions}
                onChange={(value) =>
                  handleChangeWidgetAppearance("language", value)
                }
                value={widgetAppearance.language}
              />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Select
                label={
                  <span style={{ color: widgetAppearance.titleColor }}>
                    First day of calendar
                  </span>
                }
                options={daysOfWeekOptions}
                onChange={(value) =>
                  handleChangeWidgetAppearance("dayOfWeek", value)
                }
                value={widgetAppearance.dayOfWeek}
              />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Select
                label={
                  <span style={{ color: widgetAppearance.titleColor }}>
                    Date format
                  </span>
                }
                options={dateFormatOptions}
                onChange={(value) =>
                  handleChangeWidgetAppearance("dateFormat", value)
                }
                value={widgetAppearance.dateFormat}
              />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <div className="d-flex">
                <TextField
                  value={widgetAppearance.themeColor}
                  label={
                    <span style={{ color: widgetAppearance.titleColor }}>
                      Theme color
                    </span>
                  }
                  type="text"
                />
                <input
                  type="color"
                  className="color-picker"
                  value={widgetAppearance.themeColor}
                  onChange={(event) =>
                    handleChangeWidgetAppearance(
                      "themeColor",
                      event.target.value
                    )
                  }
                />
              </div>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <div className="d-flex">
                <TextField
                  value={widgetAppearance.titleColor}
                  label={
                    <span style={{ color: widgetAppearance.titleColor }}>
                      Title color
                    </span>
                  }
                  type="text"
                />
                <input
                  type="color"
                  className="color-picker"
                  value={widgetAppearance.titleColor}
                  onChange={(event) =>
                    handleChangeWidgetAppearance(
                      "titleColor",
                      event.target.value
                    )
                  }
                />
              </div>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <div className="d-flex">
                <TextField
                  value={widgetAppearance.requiredMessageColor}
                  label={
                    <span style={{ color: widgetAppearance.titleColor }}>
                      Required message text color
                    </span>
                  }
                  type="text"
                  
                />
                <input
                  type="color"
                  className="color-picker"
                  value={widgetAppearance.requiredMessageColor}
                  onChange={(event) =>
                    handleChangeWidgetAppearance(
                      "requiredMessageColor",
                      event.target.value
                    )
                  }
                />
              </div>
            </Grid.Cell>
          </Grid>
        </Card>
        <Card background="bg-surface">
          <div className="flex-start">
            <Icon source={TextIcon} tone="textCritical" />
            <Text as="span" variant="headingSm" tone="critical">
              Widget text
            </Text>
          </div>
          <Tabs
            tone="textCritical"
            tabs={tabs}
            selected={selectedTab}
            onSelect={(tab) => {
              setSelectedTab(tab);
            }}
            fitted
          >
            {selectedTab === 0 && (
              <>
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Title
                    </span>
                  }
                  name="title"
                  value={deliveryDate?.title}
                  onChange={(value) => {
                    handleChangeDeliveryDate("title", value);
                  }}
                  autoComplete="off"
                  placeholder="Select a delivery date"
                  error={
                    deliveryError?.title && (
                      <span
                        style={{
                          color: widgetAppearance?.requiredMessageColor,
                        }}
                      >
                        The field is required !
                      </span>
                    )
                  }
                />
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Delivery date label
                    </span>
                  }
                  name="dateLabel"
                  value={deliveryDate?.dateLabel}
                  onChange={(value) => {
                    handleChangeDeliveryDate("dateLabel", value);
                  }}
                  autoComplete="off"
                  placeholder="Delivery date"
                  error={
                    deliveryError?.dateLabel && (
                      <span
                        style={{
                          color: widgetAppearance?.requiredMessageColor,
                        }}
                      >
                        The field is required !
                      </span>
                    )
                  }
                />
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Delivery date title
                    </span>
                  }
                  name="dateTitle"
                  value={deliveryDate?.dateTitle}
                  onChange={(value) => {
                    handleChangeDeliveryDate("dateTitle", value);
                  }}
                  autoComplete="off"
                  placeholder="Delivery date"
                  error={
                    deliveryError?.dateTitle && (
                      <span
                        style={{
                          color: widgetAppearance?.requiredMessageColor,
                        }}
                      >
                        The field is required !
                      </span>
                    )
                  }
                />
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Delivery time title
                    </span>
                  }
                  name="timeTitle"
                  value={deliveryDate?.timeTitle}
                  onChange={(value) => {
                    handleChangeDeliveryDate("timeTitle", value);
                  }}
                  autoComplete="off"
                  placeholder="Delivery date"
                />
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Required message text
                    </span>
                  }
                  name="message"
                  value={deliveryDate?.message}
                  onChange={(value) => {
                    handleChangeDeliveryDate("message", value);
                  }}
                  autoComplete="off"
                  placeholder="Herry Nguyen"
                />
              </>
            )}

            {selectedTab === 1 && (
              <>
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Store pickup label
                    </span>
                  }
                  name="label"
                  value={storePickup?.label}
                  onChange={(value) => {
                    handleChangeStorePickup("label", value);
                  }}
                  autoComplete="off"
                  placeholder="Store Pickup"
                />
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Message text to required buyers to choose a pickup
                      location
                    </span>
                  }
                  name="messageBuyers"
                  value={storePickup?.messageBuyers}
                  onChange={(value) => {
                    handleChangeStorePickup("messageBuyers", value);
                  }}
                  autoComplete="off"
                  placeholder="Choose the storages to pickup your products(s)"
                />
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Store pickup date title
                    </span>
                  }
                  name="dateTitle"
                  value={storePickup?.dateTitle}
                  onChange={(value) => {
                    handleChangeStorePickup("dateTitle", value);
                  }}
                  autoComplete="off"
                  placeholder="Delivery date"
                />
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Store pickup time title
                    </span>
                  }
                  name="timeTitle"
                  value={storePickup?.timeTitle}
                  onChange={(value) => {
                    handleChangeStorePickup("timeTitle", value);
                  }}
                  autoComplete="off"
                  placeholder="Pickup location"
                />
                <TextField
                  label={
                    <span style={{ color: widgetAppearance?.titleColor }}>
                      Required message text
                    </span>
                  }
                  name="message"
                  value={storePickup?.message}
                  onChange={(value) => {
                    handleChangeStorePickup("message", value);
                  }}
                  autoComplete="off"
                  placeholder="Please select pickup date before checkout"
                />
              </>
            )}
          </Tabs>
        </Card>
        {/* </FormLayout>
</Form> */}
      </div>
    </>
  );
}

export default App;
