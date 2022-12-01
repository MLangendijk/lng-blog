import {Lightning, Router } from "@lightningjs/sdk";
import {RouterPage} from "./RouterPage";

interface SplashPage extends Lightning.Component.TemplateSpec {
    Text: any
}

export default class Splash extends Lightning.Component<SplashPage, RouterPage> {

    static override _template () {
        return {
            rect: true,
            w: 1920,
            h: 1080,
            color: 0xff0f0f0f,

            Text: {
                text: {
                    text: 'Loading...'
                }
            }
        }
    }

    override _active () {
        setTimeout(() => {
            Router.navigate('player')
        }, 3000);
    }
}