/* eslint-disable react/prop-types */
import { Card, Checkbox, Collapsible, Icon, Text } from "@shopify/polaris";
import {
  IconsFilledIcon,
  CaretDownIcon,
  CaretUpIcon,
} from "@shopify/polaris-icons";
import { handleChangeValue } from "../appFunction";
import { CustomLabel } from "./CustomLabel";
import { useState } from "react";
export const WidgetPosition = (props) => {
  const [openCollapse, setOpenCollapse] = useState(true);
  const { widgetAppearance, setWidgetPosition, widgetPosition } = props;
  return (
    <Card background="bg-surface">
      <div
        className="flex-between"
        onClick={() => {
          setOpenCollapse(!openCollapse);
        }}
      >
        <div className="flex-start">
          <Icon source={IconsFilledIcon} tone="textCritical" />
          <Text as="span" variant="headingSm" tone="critical">
            Widget position
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
        <div>
          <Checkbox
            label={
              <CustomLabel
                title="Show the calendar at the product page"
                titleColor={widgetAppearance?.titleColor}
              />
            }
            checked={widgetPosition?.isShow}
            onChange={(event) =>
              handleChangeValue("isShow", event, setWidgetPosition)
            }
          />
        </div>
        <Checkbox
          label={
            <CustomLabel
              title="Required the delivery date before checkout"
              titleColor={widgetAppearance?.titleColor}
            />
          }
          checked={widgetPosition?.isRequired}
          onChange={(event) =>
            handleChangeValue("isRequired", event, setWidgetPosition)
          }
        />
      </Collapsible>
    </Card>
  );
};
