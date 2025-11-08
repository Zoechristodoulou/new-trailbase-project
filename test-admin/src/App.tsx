import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { users_create, users_edit, users_list, users_show } from "./pages/user_info";
import PersonIcon from "@mui/icons-material/Person";
import { createTrailbaseProvider } from "../ra-trailbase";

const TRAILBASE_URL = "https://laughing-waffle-97qg59jjqg7v3q9j-4000.app.github.dev/"
const { dataProvider} = await createTrailbaseProvider (TRAILBASE_URL)


export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="User_Info" list={users_list} show={users_show} edit={users_edit} create={users_create} icon={PersonIcon}/>
  </Admin>
);
