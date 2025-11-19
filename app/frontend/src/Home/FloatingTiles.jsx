import "./FloatingTiles.css";

import Tile from "./Tile";

const FloatingTiles = () => {
    return(
        <>
            <div className="floatingTiles">
                <Tile type="members"/>
                <Tile type="events" />
                <Tile type="payment" />
            </div>
        </>
    )

}

export default FloatingTiles;