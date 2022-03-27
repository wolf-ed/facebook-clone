import './SidebarRow.css';
import { Avatar } from '@mui/material';

// You can pass components as a prop, but for that you have to start with capital: Icon
//if you put icon(without capital) it won't work passing components as props
const SidebarRow = ({ src, Icon, title }) => {


    return <div className="sidebarRow">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h2>{title}</h2>
    </div>
}

export default SidebarRow;