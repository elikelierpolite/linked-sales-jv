import Swipe1 from "./Swipe1";
import Swipe2 from "./Swipe2";
import Contact from "./Contact";
import Access from "./Access";
import Link from "./Link";
import { ButtonGroup } from "@mui/material";

const Buttons = () => {
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
        <ButtonGroup>
            <Swipe1 />
            <Swipe2 />
            <Access />
            <Contact />
            <Link />
        </ButtonGroup>
        </div>
    )
}

export default Buttons