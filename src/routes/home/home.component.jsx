import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {

    return (
      <section>
        <Directory />
        <Outlet /> 
      </section> 
    );
}
 
export default Home;