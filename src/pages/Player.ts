import {Lightning, VideoPlayer} from "@lightningjs/sdk";
import {RouterPage} from "./RouterPage"; // Defines isPage:true in the TypeConfig.
// @ts-ignore
import shaka from 'shaka-player';
import PlayPause from "../components/PlayPause";

export default class Player extends Lightning.Component<Lightning.Component.TemplateSpecLoose, RouterPage> {

    _player: shaka.Player

    static override _template(): Lightning.Component.Template<Lightning.Component.TemplateSpecLoose> {
        return {
            Wrapper: {
                alpha: 1,

                PlayPause: {
                    type: PlayPause,
                    i: 'playpause'
                }
            }
        }
    }

    override _firstActive() {
        VideoPlayer.consumer(this);
        VideoPlayer.loader(this._loadPlayback.bind(this));
        VideoPlayer.unloader(this._unloadPlayback.bind(this));
    }

    override _active() {
        VideoPlayer.open('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.mpd')
    }

    override _getFocused(): Lightning.Component {
        return this.tag('PlayPause');
    }

    _setupShakaPlayer (videoEl: HTMLVideoElement) {
        videoEl.autoplay = true;
        this._player = new shaka.Player(videoEl);
    }

    async _loadPlayback (url: string, videoEl: HTMLVideoElement) {
        this._setupShakaPlayer(videoEl);

        await this._player.load(url);
    }

    async _unloadPlayback () {
        await this._player.unload();
    }

    override _handleEnter () {
        const button = this.tag('PlayPause');

        button.isPlaying = !button.isPlaying;
        button.isPlaying ? VideoPlayer.play() : VideoPlayer.pause();
    }
}