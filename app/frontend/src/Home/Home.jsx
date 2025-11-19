import FloatingTiles from "./FloatingTiles";
import ModuleName from "./ModuleName";
import BottomHomeContent from "./BottomHomeContent";

const Home = () => {
    return(
        <>
            <ModuleName name="Dashboard" icon="IoHome" />
            <span className="blackbar"></span>
            <div className="pageContent">
                <FloatingTiles />

                <BottomHomeContent />
            </div>
        </>
    )

}

export default Home;