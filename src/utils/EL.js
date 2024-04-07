export function El({
  element,
  children,
  eventListener,
  dataset,
  restAttrs = {},
  ...rest
}) {
  const elem = document.createElement(element);
  for (const attr in rest) {
    elem[attr] = rest[attr];
  }
  if (children) {
    for (const child of children) {
      elem.append(child);
    }
  }
  if (eventListener) {
    eventListener.map((el) => elem.addEventListener(el.event, el.callback));
  }
  if (dataset) {
    for (const key in dataset) {
      elem.dataset[key] = dataset[key];
    }
  }
  for (const key in restAttrs) {
    elem.setAttribute(key, restAttrs[key]);
  }
  return elem;
}
