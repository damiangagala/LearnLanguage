export function calcCords(language, languages, radius, isXAxis) {
  const angle = Math.PI / 2 - ((2 * Math.PI) / languages) * -language;
  if (isXAxis === true) return radius * Math.cos(angle);
  else return radius * Math.sin(angle);
}
