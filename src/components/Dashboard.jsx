import { Appbar } from "./Appbar"
import { Balance } from "./Balance"
import { Users } from "./Users"
export function Dashboard(){
    return(
        <>
            <div>
                <Appbar/>
                <Balance />
                <Users/>
            </div>
        </>
    )
}