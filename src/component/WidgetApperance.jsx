/* eslint-disable react/prop-types */
import {
  Card,
  Checkbox,
  Collapsible,
  Grid,
  Icon,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { handleChangeValue } from "../appFunction";
import {
  DATE_FORMAT_OPTIONS,
  DAYS_OF_WEEKS,
  GRID_TWO_COLUMNS,
  LANGUGES,
  OPTIONS,
  OPTION_DEFAULT,
} from "../appConst";
import {
  PaintBrushFlatIcon,
  CaretDownIcon,
  CaretUpIcon,
} from "@shopify/polaris-icons";
import { CustomLabel } from "./CustomLabel";
import { useState } from "react";
export const WidgetApperance = (props) => {
  const { widgetAppearance, setWidgetAppearance } = props;
  const [openCollapse, setOpenCollapse] = useState(true);
  return (
    <Card background="bg-surface">
      <div
        className="flex-between mb-20"
        onClick={() => {
          setOpenCollapse(!openCollapse);
        }}
      >
        <div className="flex-start">
          <Icon source={PaintBrushFlatIcon} tone="textCritical" />
          <Text as="span" variant="headingSm" tone="critical">
            Widget appearance
          </Text>
        </div>
        <div>
          <Icon
            source={!openCollapse ? CaretDownIcon : CaretUpIcon}
            tone="textCritical"
          />
        </div>
      </div>
      <Collapsible
        open={openCollapse}
        id="basic-collapsible"
        transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
        expandOnPrint
      >
        <Grid>
          <Grid.Cell columnSpan={GRID_TWO_COLUMNS}>
            <Select
              label={
                <CustomLabel
                  title="Layout"
                  titleColor={widgetAppearance?.titleColor}
                />
              }
              options={OPTION_DEFAULT}
              onChange={(value) =>
                handleChangeValue("selected", value, setWidgetAppearance)
              }
              value={widgetAppearance.selected}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={GRID_TWO_COLUMNS}>
            <Select
              label={
                <CustomLabel
                  title="Calendar layout"
                  titleColor={widgetAppearance?.titleColor}
                />
              }
              options={OPTIONS}
              onChange={(value) =>
                handleChangeValue("selected", value, setWidgetAppearance)
              }
              value={widgetAppearance.selected}
            />
            <Checkbox
              label={
                <CustomLabel
                  title="Always open the calendar"
                  titleColor={widgetAppearance?.titleColor}
                />
              }
              checked={widgetAppearance.isAlwaysOpen}
              onChange={(event) =>
                handleChangeValue("isAlwaysOpen", event, setWidgetAppearance)
              }
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={GRID_TWO_COLUMNS}>
            <Select
              label={
                <CustomLabel
                  title="Calendar language"
                  titleColor={widgetAppearance?.titleColor}
                />
              }
              options={LANGUGES}
              onChange={(value) =>
                handleChangeValue("language", value, setWidgetAppearance)
              }
              value={widgetAppearance.language}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={GRID_TWO_COLUMNS}>
            <Select
              label={
                <CustomLabel
                  title="First day of calendar"
                  titleColor={widgetAppearance?.titleColor}
                />
              }
              options={DAYS_OF_WEEKS}
              onChange={(value) =>
                handleChangeValue("dayOfWeek", value, setWidgetAppearance)
              }
              value={widgetAppearance.dayOfWeek}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={GRID_TWO_COLUMNS}>
            <Select
              label={
                <CustomLabel
                  title="Date format"
                  titleColor={widgetAppearance?.titleColor}
                />
              }
              options={DATE_FORMAT_OPTIONS}
              onChange={(value) =>
                handleChangeValue("dateFormat", value, setWidgetAppearance)
              }
              value={widgetAppearance.dateFormat}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={GRID_TWO_COLUMNS}>
            <div className="d-flex">
              <TextField
                label={
                  <CustomLabel
                    title="Theme color"
                    titleColor={widgetAppearance?.titleColor}
                  />
                }
                value={widgetAppearance.themeColor}
                type="text"
              />
              <input
                type="color"
                className="color-picker"
                value={widgetAppearance.themeColor}
                onChange={(event) =>
                  handleChangeValue(
                    "themeColor",
                    event.target.value,
                    setWidgetAppearance
                  )
                }
              />
            </div>
          </Grid.Cell>
          <Grid.Cell columnSpan={GRID_TWO_COLUMNS}>
            <div className="d-flex">
              <TextField
                label={
                  <CustomLabel
                    title="Title color"
                    titleColor={widgetAppearance?.titleColor}
                  />
                }
                value={widgetAppearance.titleColor}
                type="text"
              />
              <input
                type="color"
                className="color-picker"
                value={widgetAppearance.titleColor}
                onChange={(event) =>
                  handleChangeValue(
                    "titleColor",
                    event.target.value,
                    setWidgetAppearance
                  )
                }
              />
            </div>
          </Grid.Cell>
          <Grid.Cell columnSpan={GRID_TWO_COLUMNS}>
            <div className="d-flex">
              <TextField
                value={widgetAppearance.requiredMessageColor}
                label={
                  <CustomLabel
                    title="Required message text color"
                    titleColor={widgetAppearance?.titleColor}
                  />
                }
                type="text"
              />
              <input
                type="color"
                className="color-picker"
                value={widgetAppearance.requiredMessageColor}
                onChange={(event) =>
                  handleChangeValue(
                    "requiredMessageColor",
                    event.target.value,
                    setWidgetAppearance
                  )
                }
              />
            </div>
          </Grid.Cell>
        </Grid>
      </Collapsible>
    </Card>
  );
};
