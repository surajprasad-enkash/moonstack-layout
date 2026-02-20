const fs = require('fs');
const path = require('path');

function walk(dir, results = []) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                walk(filePath, results);
            }
        } else {
            results.push(filePath);
        }
    });
    return results;
}

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico'];
const searchExtensions = ['.tsx', '.ts', '.js', '.jsx', '.css', '.json'];

const rootDir = process.cwd();
const assetsDirs = [path.join(rootDir, 'src', 'assets'), path.join(rootDir, 'public')];
const srcDir = path.join(rootDir, 'src');

// 1. Collect all images
const allImages = [];
assetsDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        walk(dir).forEach(file => {
            if (imageExtensions.includes(path.extname(file).toLowerCase())) {
                allImages.push({
                    name: path.basename(file),
                    relPath: path.relative(rootDir, file),
                    fullPath: file
                });
            }
        });
    }
});

if (allImages.length === 0) {
    console.log("No images found.");
    process.exit(0);
}

// 2. Collect all source files
const sourceFiles = walk(srcDir).filter(file => searchExtensions.includes(path.extname(file).toLowerCase()));

// 3. Read content of all source files
let allContent = "";
sourceFiles.forEach(file => {
    try {
        allContent += fs.readFileSync(file, 'utf8') + "\n";
    } catch (e) { }
});

// 4. Check for each image if it's used
const unusedImages = allImages.filter(img => {
    return !allContent.includes(img.name);
});

// 5. Write results
const reportPath = path.join(rootDir, 'unused-images.md');
let report = "# Unused Images Report\n\n";
report += "| Image Name | Path |\n";
report += "| --- | --- |\n";
unusedImages.forEach(img => {
    report += `| ${img.name} | ${img.relPath} |\n`;
});

fs.writeFileSync(reportPath, report);

console.log(`Found ${unusedImages.length} unused images out of ${allImages.length}. Report saved to unused-images.md`);
