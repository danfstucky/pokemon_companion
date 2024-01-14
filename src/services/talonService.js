const encloseInAngles = (text) => `<${text}>`;

const scrollToId = (elementId) => {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: 'smooth' });
};

export default {
  encloseInAngles,
  scrollToId,
};
