const fs = require('fs');
const path = require('path');

const lottieDir = 'c:\\Users\\HP\\Desktop\\moonstack-new\\public\\lottie';
const oldName = /klasha/gi;
const newName = 'moonstack';

function processFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processFiles(fullPath);
        } else if (file.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (oldName.test(content)) {
                console.log(`Cleaning: ${fullPath}`);
                const updatedContent = content.replace(oldName, newName);
                fs.writeFileSync(fullPath, updatedContent);
            }
        }
    });
}

processFiles(lottieDir);
console.log('Cleanup complete.');
