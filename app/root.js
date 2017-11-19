import React from 'react';
import Header from './components/header';
import Progress from './components/progress';

class Root extends React.Component{
    constructor(props){
        super(props);
        this.state={
            progress:"50"
        }
    }
    componentDidMount(){
        $('#player').jPlayer({
            ready:function(){
                $("#player").jPlayer('setMedia',{
                    mp3:'http://m10.music.126.net/20171119224144/c933b9d994780eb117459dcb5c91848c/ymusic/ae09/e635/27cb/7858b58c9e8c0d3415938fc6d80e50bf.mp3'
                }).jPlayer('play');
            },
            supplied:"mp3",
            wmode:"window"
        });
        $("#player").bind($.jPlayer.event.timeupdate,(e)=>{
            this.setState({
                progress:e.jPlayer.status.currentPercentAbsolute
            })
        })
    }
    render(){
        return (
            <div>
                <Header />
                <div id="player"></div>
                <Progress progress = {this.state.progress} onProgressChange={this.progressChangeHandle} />
            </div>
        );
    }

    progressChangeHandle(progress){
        alert(progress);
    }
    componentWillUnMount(){
        $('#jPlayer').unbind($.jPlayer.event.timeupdate);
    }
}

export default Root;