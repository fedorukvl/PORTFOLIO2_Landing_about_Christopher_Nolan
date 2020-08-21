import React from 'react'
import LastMoviesLinkDiv from './LinkDiv/lastMoviesLinkDiv.js'
import './LastMovies.css'
import interstellarPic from './img/interstellar.jpg'

class LastMovies extends React.Component{

	componentDidMount(){
		let container=document.querySelector('.lastMoviesDiv');
		container.style.height=document.documentElement.clientHeight+'px';
		let info=document.querySelector('.interstellarPicDiv');
		info.style.marginTop=Math.round(container.clientHeight/4-info.offsetHeight/2)+'px';
	}

	render(){
		return(
			<div className='lastMoviesDiv'>
					<div className='interstellarDiv'>
						<div className='interstellarPicDiv'>
							<img src={interstellarPic} alt='interstellar'/>
						</div>
					</div>
					<div className='lastMovieLinkDiv'>
						<LastMoviesLinkDiv/>
					</div>
			</div>
		)
	}
}

export default LastMovies