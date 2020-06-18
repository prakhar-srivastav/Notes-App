const notes = require('./note.js')
const chalk =require ('chalk')
const yargs = require('yargs')






yargs.command({

command:'add',
describe:'Add a new Note',
builder:{
  title:{
  	describe:'Note title',
  	demandOption:true,
  	type: 'string'
  },
  body:{
  	describe:'description of task',
  	demandOption:true,
  	type: 'string'
  }
},
handler: function(argv){
	//console.log(argv.title);
	notes.addNotes(argv.title,argv.body)
}
})


yargs.command({

command:'remove',
describe:'Remove a Note',
builder:{
  title:{
  	describe:'Note title',
  	demandOption:true,
  	type: 'string'
  }
},
handler: function(argv){
	//console.log(argv.title);
	notes.remNotes(argv.title)
}
})

yargs.command({

command:'read',
describe:'read Note',
builder:{
  title:{
  	describe:'Note title',
  	demandOption:true,
  	type: 'string'
  }
},
handler: function(argv){

	notes.readNote(argv.title)
}
})


yargs.command({

command:'list',
describe:'List all Notes',
handler: function(){
	notes.listNotes()
}
})



yargs.parse()