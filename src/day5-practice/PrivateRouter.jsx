import { Redirect , Route} from "react-router-dom"
import { useUser } from "./helper/useUser"

export const PrivateRoute = (props) => {
  const user = useUser()

  if(!user) return <Redirect to="/signup"/>
  return <Route {...props} />
}