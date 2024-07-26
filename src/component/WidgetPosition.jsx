/* eslint-disable react/prop-types */
import { Card, Checkbox, Icon, Text } from "@shopify/polaris";
import { IconsFilledIcon } from "@shopify/polaris-icons";
import { handleChangeValue } from "../appFunction";
import { CustomLabel } from "./CustomLabel";
export const WidgetPosition = (props) => {
  const { widgetAppearance, setWidgetPosition, widgetPosition } = props;
  return (
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
    </Card>
  );
};
