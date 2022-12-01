import Player from "../pages/Player";
import Splash from "../pages/Splash";

export default {
    root: 'splash',
    routes: [
        {
            path: 'splash',
            component: Splash,
            name: 'splash'
        },
        {
            path: 'player',
            component: Player,
            name: 'player'
        }
    ]
}