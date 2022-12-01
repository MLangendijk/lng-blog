import {Lightning} from "@lightningjs/sdk";

export default class PlayPause extends Lightning.Component {

    // @ts-ignore
    _isPlaying: boolean

    override _setup() {
        this._isPlaying = true;
    }

    static override _template () {
        return {
            mount: 0.5,
            x: 1920 / 2,
            y: 1080 / 2,
            rect: true,
            w: 250,
            h: 250,
            color: 0x00000000,
            Background: {
                rect: true,
                w: 250,
                h: 250,
                color: 0xffababab,
                shader: {
                    type: Lightning.shaders.RoundedRectangle,
                    radius: 125
                },
            },
            Text: {
                mount: 0.5,
                x: 125,
                y: 125,
                text: {
                    textColor: 0xffffffff,
                    text: 'Pause'
                }
            }
        }
    }

    set isPlaying(isPlaying: boolean) {
        this._isPlaying = isPlaying;
        this.tag('Text').patch({
            text: {
                text: isPlaying ? 'Pause' : 'Play'
            }
        });
    }

    get isPlaying(): boolean {
        return this._isPlaying;
    }
}