const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const inPath = path.join(publicDir, 'logo.svg');
    if (!fs.existsSync(inPath)) {
      throw new Error('Input SVG not found: ' + inPath);
    }

    const tasks = [
      { file: 'logo.png', width: 600, format: 'png' },
      { file: 'logo@2x.png', width: 1200, format: 'png' },
      { file: 'logo.webp', width: 600, format: 'webp' },
      { file: 'logo@2x.webp', width: 1200, format: 'webp' },
    ];

    for (const t of tasks) {
      const outPath = path.join(publicDir, t.file);
      const pipeline = sharp(inPath).resize({ width: t.width });
      if (t.format === 'png') pipeline.png({ quality: 90 });
      if (t.format === 'webp') pipeline.webp({ quality: 90 });
      await pipeline.toFile(outPath);
      console.log('Written', outPath);
    }

    console.log('All logos generated.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
