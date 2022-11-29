import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/slice/authSlice"


const ShowLoginLinks = ({children}) => {
 const loggedIn = useSelector(selectIsLoggedIn);
 if(loggedIn) {
   return children
 }
 return null;
}
export const ShowLogoutLinks = ({children}) => {
    const loggedIn = useSelector(selectIsLoggedIn);
    if(!loggedIn) {
      return children
    }
    return null;
   }

export default ShowLoginLinks;