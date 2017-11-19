import React from 'react';
import "./progress.less";

 class progress extends React.Component{
     changeProgress(e){
         let pbar = this.refs.progress;
         let progress = (e.clientX - pbar.getBoundingClientRect().left/pbar.clientWidth);
         this.props.onProgressChange&&this.props.onProgressChange(progress)
     }
     render(){
         return(
             <div className="component-progress row" ref="progress" onClick={this.changeProgress.bind(this)}>
                 <div className="progress" style={{width:`${this.props.progress}%`}}></div>
             </div>
         );
     }
 }

 export default progress;