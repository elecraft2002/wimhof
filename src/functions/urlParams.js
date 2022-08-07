import { useLocation } from "react-router"

export default name =>{
    const {search} = useLocation()
    const query = new URLSearchParams(search)
    return query.get(name)
}