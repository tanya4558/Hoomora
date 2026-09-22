// Central business / brand information for Hoomora
export const BUSINESS = {
  name: "Hoomora",
  tagline: "Smart storage for everyday living",
  intro:
    "Thoughtfully designed organizers that keep your home essentials protected, tidy and easy to find.",
  proprietor: "Siddique Alam Shaikh",
  firm: "Zuvox Bag's",
  phone: "9867143868",
  phoneIntl: "919867143868",
  email: "zuvoxbags@gmail.com",
  address: {
    line1: "Plot No. 25-26-27, Jalaram Industrial Estate",
    line2: "Masma Road, Village Masma, Olpad",
    city: "Surat",
    state: "Gujarat",
    pincode: "394540",
    country: "India",
  },
  trademark: {
    mark: "Hoomora",
    class: "Class 20",
    status: "Proposed to be used",
    goods:
      "Furniture, mirrors, picture frames; goods of wood, cork, reed, cane, wicker, horn, bone, ivory, shell, plastics and substitutes as per Class 20.",
  },
};

export const fullAddress = [
  BUSINESS.address.line1,
  BUSINESS.address.line2,
  `${BUSINESS.address.city}, ${BUSINESS.address.state} - ${BUSINESS.address.pincode}`,
  BUSINESS.address.country,
].join(", ");

export const whatsappLink = (message) =>
  `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(
    message ||
      "Hi Hoomora, I'd like to know more about your storage organizers.",
  )}`;

export const telLink = `tel:+${BUSINESS.phoneIntl}`;
export const mailLink = `mailto:${BUSINESS.email}`;
