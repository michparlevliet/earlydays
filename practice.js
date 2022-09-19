var stopLight=prompt("what colour is the light?", "red, yellow, or green");

switch(stopLight){
  case "green":
    alert("go!");
    break;
  case "yellow":
    alert("slow down");
    break;
  case "red":
    alert("stop!");
    break;
  default:
    alert("drive with caution");
    break;
}