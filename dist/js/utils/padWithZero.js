function padWithZero(number) {
  return number < 10 ? "0" + number : number.toString();
}
export default padWithZero;
