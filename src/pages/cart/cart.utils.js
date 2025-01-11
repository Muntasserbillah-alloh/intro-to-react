import moment from "moment";

export const dummySummaryCardData = {
  items: [
    {
      label: "Price",
      value: "$319.98",
    },
    {
      label: "Discount",
      value: "$31.9",
    },
    {
      label: "Shipping",
      value: "Free",
      color: "var(--text-green-color)",
    },
    {
      label: "Coupon Applied",
      value: "$0.00",
    },
  ],
  total: [
    {
      label: "TOTAL",
      value: "$288.08",
    },
    {
      label: "Estimated Delivery By",
      value: moment().add("month", 1).format("DD MMM, YYYY"),
    },
  ],
};
