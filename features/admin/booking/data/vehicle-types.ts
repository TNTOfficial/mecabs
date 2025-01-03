// eslint-disable-next-line react-hooks/exhaustive-deps
export const vehicleTypes = [
  {
    type: "Sedan",
    imageUrl: "/sedan_icon.webp",
    sitting: "1 - 4 seater",
    selected: true,
    value: "sedan",
    qualityFactor: 1.0,
  },
  {
    type: "Any Available",
    imageUrl: "/sedan_icon.webp",
    sitting: "1 - 4 seater",
    selected: true,
    value: "anyavailable",
    qualityFactor: 1.0,
  },
  {
    type: "Premium",
    imageUrl: "/premium_icon.webp",
    sitting: "1 - 4 seater",
    selected: false,
    value: "premium",
    qualityFactor: 1.17,
  },
  {
    type: "SUV",
    imageUrl: "/suv_icon.webp",
    sitting: "1 - 6 seater",
    selected: false,
    value: "suv",
    qualityFactor: 1.09,
  },
  {
    type: "Maxi Taxi",
    imageUrl: "/maxi_icon.webp",
    sitting: "1 - 9 seater",
    selected: false,
    value: "maxi",
    qualityFactor: 1.3,
  },
  {
    type: "Wheelchair Accessible Taxi",
    imageUrl: "/wheelchair.webp",
    sitting: "2 wheelchair",
    selected: false,
    value: "wheelchair",
    qualityFactor: 1.3,
    hidden: true,
  },
];
