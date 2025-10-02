import drizzle from "../../assets/images/icon-drizzle.webp";
import fog from "../../assets/images/icon-fog.webp";
import overcast from "../../assets/images/icon-overcast.webp";
import partlyCloudy from "../../assets/images/icon-partly-cloudy.webp";
import rain from "../../assets/images/icon-rain.webp";
import snow from "../../assets/images/icon-snow.webp";
import storm from "../../assets/images/icon-storm.webp";
import sunny from "../../assets/images/icon-sunny.webp";

function Img_icons({code,className}) {
    const images = [sunny,partlyCloudy,overcast,fog,drizzle,rain,snow,storm]
    return (
        <img className={className} src={images[code]} alt={`icon-weather`}/>
    )
}export default Img_icons
