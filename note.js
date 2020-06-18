const fs = require('fs')
const chalk =require ('chalk')

const getNotes = function() {
	return 'my notes'
}
const addNotes =function (title,body)
{

  const note =loadNotes()
  console.log(note.length);

  for(var i=0 ; i<note.length;i++)
  {
  	if(note[i].title===title) 
  		{console.log(chalk.red.inverse('Title already taken'));
  		  	    return;}
  }
    note.push({
  	title: title,
  	body: body
  })
  fs.writeFileSync('notes.json',JSON.stringify(note));
  		console.log(chalk.green.inverse('Note added'));
  	    return;
}

const remNotes =function (title)
{

  const note =loadNotes()
  if(note.length===0) return 
  
  newNotes=[]
  for(var i=0 ; i<note.length;i++)
  {
  	if(note[i].title===title)  continue ;
  		 newNotes.push(note[i])
  }
   
  fs.writeFileSync('notes.json',JSON.stringify(newNotes));
  		console.log(chalk.green.inverse('Removed successfully'));
  	    return;
}

const listNotes =function ()
{

  const note =loadNotes()
  if(note.length===0) return 
  

  for(var i=0 ; i<note.length;i++)
  {
  	console.log(chalk.inverse(note[i].title));
  	console.log(note[i].body);
  }
   
 return;
}

const readNote =function (title)
{

  const note =loadNotes(title)
  if(note.length===0) console.log(chalk.red.inverse('Not found'));
  
  for(var i=0 ; i<note.length;i++)
  {
  	if(note[i].title===title)  
  		 {
  		 	console.log(chalk.white.inverse(note[i].body));
  		    return;
  		 }
  }
   
 
  		console.log(chalk.red.inverse('Not found'));
  	    return ;

}

const loadNotes =function() 
{

 try
 {
 	    const db= fs.readFileSync('notes.json')
 		const dataJSON= db.toString()
 		return JSON.parse(dataJSON)
 }
 catch(e)
 {
 	return []
 }
}
module.exports = {

  getNotes:getNotes,
  addNotes:addNotes,
  remNotes:remNotes,
  listNotes:listNotes,
  readNote:readNote
}