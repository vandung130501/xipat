import { TextField } from "@shopify/polaris";
import { handleChangeValue } from "../../appFunction";
import { CustomLabel } from "../CustomLabel";

/* eslint-disable react/prop-types */

const LIST_STORE_PICKUP = [
  {
    id: "1213117",
    label: "Store pickup label",
    field: "label",
    placeholder: "Store Pickup",
  },
  {
    id: "1213118",
    label: "Message text to required buyers to choose a pickup location",
    field: "messageBuyers",
    placeholder: "Choose the storages to pickup your products(s)",
  },
  {
    id: "1213119",
    label: "Store pickup date title",
    field: "dateTitle",
    placeholder: "Delivery date",
  },
  {
    id: "1213120",
    label: "Store pickup time title",
    field: "timeTitle",
    placeholder: "Pickup location",
  },
  {
    id: "1213121",
    label: "Required message text",
    field: "message",
    placeholder: "Please select pickup date before checkout",
  },
];

export const StorePickupTab = (props) => {
  const { widgetAppearance, storePickup, setStorePickup } = props;
  return (
    <>
      {LIST_STORE_PICKUP.map((pickup) => {
        return (
          <TextField
            key={pickup?.id}
            label={<CustomLabel title={pickup.label} titleColor={widgetAppearance?.titleColor}/>}
            name={pickup.field}
            value={storePickup?.[pickup.field]}
            onChange={(value) => {
              handleChangeValue(pickup.field, value, setStorePickup);
            }}
            autoComplete="off"
            placeholder={pickup.placeholder}
          />
        );
      })}
    </>
  );
};
