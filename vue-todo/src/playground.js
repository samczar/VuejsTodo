export default () => {
	debugger
	var name = 'Anyanka Chibuzo Samson'

	const fullname = name.split(' ')
	const lName = fullname[0] !== null || undefined ? fullname[0] : ''
	const fName = fullname[1] !== null || undefined ? fullname[1] : ''
	const otherName = fullname[2] !== null || undefined ? fullname[2] : ''

	console.log(lName)
	console.log(fName)
	console.log(otherName)
}
