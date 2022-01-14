export default function timeConversion(time) {
  const hours = time.split(":")[0];
  const mins = time.split(":")[1];
  if (hours === "00") {
    return `12:${mins} AM`;
  }
  if (hours >= "01" && hours <= "11") {
    return `${hours - 0}:${mins} AM`;
  }
  if (hours === "12") {
    return `12:${mins} PM`;
  }
  if (hours >= "13" && hours <= "23") {
    return `${hours - 12}:${mins} PM`;
  }
}
