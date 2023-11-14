const fs = require('fs');



function parse()
{
    const dataFileContent = fs.readFileSync('.env', 'utf8');
    const lines = dataFileContent.split('\n');

    lines.forEach((line) => {
    
        const [key, value] = line.split('=');

        if (key && value)
        {
            process.env[key.trim()] = value.trim();

        }
    });
}

module.exports = {
    parse
}
