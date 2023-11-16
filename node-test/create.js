const fs = require('fs');
const filePath = 'newFile.txt';
const fileContent = 'This is the content of the new file.';
fs.writeFile(filePath,fileContent,"utf8",(err) => {
    if(err){
        console.error('Error creating file:',err);;
        return;
    }
    console.log('File created successfully!');
    
})