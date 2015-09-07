registerPlugin({
    name: 'Pause/Resume',
    version: '1.0',
    description: 'Type !pause to pause the current track, and type !resume to resume playback.',
    author: 'Bey0nd_Inf1nite',
    vars: {}
}, function(sinusbot, config) {
    sinusbot.on('chat', function(ev) {
        if (ev.msg == '!pause') {
            var track = getTrack();
            if (!track) return;
            var pos = getPos();
            set(track.uuid, pos)
            chatChannel(ev.clientNick + ' paused the currently playing track.');
            stop();
        }
        if (ev.msg == '!resume') {
            play(track);
            var track = getTrack();
            if (!track) return;
            var pos = get(track.uuid);
            if (!pos) {
                chatChannel('A track has not been paused.');
                return;
            }
            seek(pos);
            chatChannel(ev.clientNick + ' resumed the track');
        }
    });
});
