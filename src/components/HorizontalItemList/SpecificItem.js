import AcUnitIcon from "@mui/icons-material/AcUnit";
import Avatar from "./Avtar";
const SpecificItem = ({ data }) => {
    return (
        <li>
            <a href={"#" + data.name}>
                <div className="">
                    <Avatar data={data.name} src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c1ee.png" />
                    <p>{data.name}</p>
                </div>
            </a>
        </li>
    );
};

export default SpecificItem;
