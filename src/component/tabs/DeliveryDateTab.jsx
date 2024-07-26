import { TextField } from "@shopify/polaris";
import { handleChangeValue } from "../../appFunction";
import { CustomLabel } from "../CustomLabel";

/* eslint-disable react/prop-types */
const LIST_DELIVERY_DATE = [
    {
      id: "1213112",
      label: "Title",
      field: "title",
      placeholder: "Select a delivery date",
    },
    {
      id: "1213113",
      label: "Delivery date label",
      field: "dateLabel",
      placeholder: "Delivery date",
    },
    {
      id: "1213114",
      label: "Delivery date title",
      field: "dateTitle",
      placeholder: "Delivery date",
    },
    {
      id: "1213115",
      label: "Delivery time title",
      field: "timeTitle",
      placeholder: "Delivery date",
    },
    {
      id: "1213116",
      label: "Required message text",
      field: "message",
      placeholder: "Herry Nguyen",
    },
  ];
export const DeliveryDateTab = (props) => {
  const {
    widgetAppearance,
    setDeliveryDate,
    deliveryDate,
    deliveryError,
  } = props;
  return (
    <>
      {LIST_DELIVERY_DATE.map((delivery) => {
        return (
          <TextField
            key={delivery?.id}
            label={<CustomLabel title={delivery.label} titleColor={widgetAppearance?.titleColor}/>}
            name={delivery.field}
            value={deliveryDate?.[delivery.field]}
            onChange={(value) => {
              handleChangeValue(delivery.field, value, setDeliveryDate);
            }}
            autoComplete="off"
            placeholder={delivery.placeholder}
            error={
              deliveryError?.[delivery.field] && (
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
        );
      })}
      {/* <TextField
        label={
          <span style={{ color: widgetAppearance?.titleColor }}>Title</span>
        }
        name="title"
        value={deliveryDate?.title}
        onChange={(value) => {
          handleChangeValue("title", value, setDeliveryDate);
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
          handleChangeValue("dateLabel", value, setDeliveryDate);
        }}
        autoComplete="off"
        placeholder="Delivery date"
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
          handleChangeValue("dateTitle", value, setDeliveryDate);
        }}
        autoComplete="off"
        placeholder="Delivery date"
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
          handleChangeValue("timeTitle", value, setDeliveryDate);
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
          handleChangeValue("message", value, setDeliveryDate);
        }}
        autoComplete="off"
        placeholder="Herry Nguyen"
      /> */}
    </>
  );
};
