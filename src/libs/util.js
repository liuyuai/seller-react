export const getTimestampFor = str => {
  str = String(str);
  if (/^\d+$/.test(str)) {
    return Number(str);
  }
  let tag = str.slice(-1);
  let num = Number(str.slice(0, -1));
  if (tag === "d") {
    return 24 * 60 * 60 * 1000 * num;
  } else if (tag === "h") {
    return 60 * 60 * 1000 * num;
  } else if (tag === "m") {
    return 60 * 1000 * num;
  } else if (tag === "s") {
    return 1000 * num;
  } else {
    return num;
  }
};
