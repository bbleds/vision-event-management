'use strict';

const dbRef = firebase.database().ref().child('Events');

// dbRef.on('value', (snapshot)=>{
// 	console.log('here');
// 	console.log(snapshot.val());
// });
dbRef.on('value', (snapshot) => {
	console.log(snapshot.val());
});
//
// dbRef.push({
// 	'name':'example'
// })

$('#event-form').on('submit', (event)=>{
	event.preventDefault();
	const formData = $('#event-form').serializeArray();
	let jsonData = {};

	for(let key in formData){
		let jsonKey = formData[key].name;
		let jsonVal = formData[key].value;
		jsonData[jsonKey] = jsonVal;
	}

	dbRef.push(jsonData).then(()=>{
		console.log('pushed successfully');
	});
});



// get all events from firebase

// create events in firebase


// delete events from firebase
