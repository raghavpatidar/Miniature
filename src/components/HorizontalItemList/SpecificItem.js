// import AcUnitIcon from "@mui/icons-material/AcUnit";
import Avatar from "./Avtar";
const SpecificItem = ({ data }) => {

    var name = data.name;
    name = name.split("/")[0];
    return (
        <li>
            <a href={"#" + data.name}>
                <div className="">
                    <Avatar data={name} src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c1ee.png" />
                    <p>{name}</p>
                </div>
            </a>
        </li>
    );
};

export default SpecificItem;
