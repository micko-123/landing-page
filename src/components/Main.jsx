import matebook from '../assets/matebook.png'
import arrowLeft from '../assets/arrow-left.svg'
import dot from '../assets/dot.svg'
import dotFull from '../assets/dot-full.svg'
import arrowRight from '../assets/arrow-right.svg'


function Main() {
	return(

		<main>
			<section className="presentation">
				<div className="introduction">
					<div className="intro-text">
						<h1>Laptop for the future</h1>
						<p>
							The new 14 inch bezeless display oferring a 4k
							display with touch screen.
						</p>
					</div>
					<div className="cta">
						<button className="cta-select">14 Inch</button>
						<button className="cta-add">Add To Cart</button>
					</div>
				</div>
				<div className="cover">
					<img src= {matebook} alt="matebook" />
				</div>
			</section>

			<div className="laptop-select">
				<img src={arrowLeft} alt="" />
				<img src={dot} alt="" />
				<img src={dotFull} alt="" />
				<img src={dotFull} alt="" />
				<img src={arrowRight} alt="" />
			</div>

			<img className="big-circle" src="./img/big-eclipse.svg" alt="" />
			<img className="medium-circle" src="./img/mid-eclipse.svg" alt="" />
			<img className="small-circle" src="./img/small-eclipse.svg" alt="" />
		</main>
	)
}


export default Main;