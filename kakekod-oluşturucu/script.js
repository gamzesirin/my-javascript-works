const container = document.querySelector('.container')
const qrInput = document.querySelector('.form-input')
const generateqrbtn = document.querySelector('#generate-qr-button')
const qrImage = document.querySelector('#qr-image')

generateqrbtn.addEventListener('click', () => {
	let qrValue = qrInput.value
	qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`

	qrImage.addEventListener('load', () => {
		container.classList.add('active')
	})
})

qrInput.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		let qrValue = qrInput.value
		qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`

		qrImage.addEventListener('load', () => {
			container.classList.add('active')
		})
	}
})
