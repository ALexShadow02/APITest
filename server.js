const express = require('express')
const app = express()
app.listen()
app.get('/', (req, res) => {
	if(req.query.login == 'is-93-004'){
		const myInfo = {
			surname : 'Horoshko',
			name : 'Oleksandr',
			group : 'IS-93',
			course : '2'
		}
		res.end(JSON.stringify(myInfo))
	}
	else{
		res.end('Not correct login given')
	}
})
app.listen(3000, () => console.log('Listening started...'))