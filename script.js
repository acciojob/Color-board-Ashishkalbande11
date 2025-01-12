//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.container');

	for(let i=0; i<800; i++){
		const square = document.createElement('div');
		square.className = 'square';
		container.appendChild(square);


		square.addEventListener('mouseover', () => {
			const randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
			square.style.backgroundColor = randomColor
			setTimeout(() => {
			square.style.backgroundColor = 'rgb(29, 29, 29)'
		},1000)
		})

		
	}
})
