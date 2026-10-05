// Gera favicon, apple-touch-icon e og-image a partir do logo.
// Uso: node scripts/gerar-icones.mjs
import sharp from 'sharp';

const logo = 'src/assets/logo-teixeira.png';
const navy = '#101c50';

await sharp(logo).resize(64, 64).png().toFile('public/favicon.png');
await sharp(logo).resize(180, 180).png().toFile('public/apple-touch-icon.png');

const brasao = await sharp(logo).resize(300, 300).png().toBuffer();
const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="85%" cy="10%" r="70%">
      <stop offset="0" stop-color="#c49a3e" stop-opacity=".22"/>
      <stop offset="1" stop-color="#c49a3e" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#c49a3e" stroke-opacity=".45" stroke-width="2" rx="24"/>
  <text x="450" y="250" font-family="serif" font-size="56" font-weight="700" fill="#ffffff">Despachante Teixeira</text>
  <text x="452" y="312" font-family="sans-serif" font-size="30" fill="#e6cf8f" letter-spacing="2">FAZENDA RIO GRANDE · PR</text>
  <text x="452" y="392" font-family="sans-serif" font-size="30" fill="#ffffff" fill-opacity=".8">Chega de burocracia.</text>
  <text x="452" y="434" font-family="sans-serif" font-size="30" fill="#ffffff" fill-opacity=".8">Deixe a papelada com a gente.</text>
</svg>`);

await sharp({ create: { width: 1200, height: 630, channels: 3, background: navy } })
  .composite([
    // brasão primeiro: o brilho por cima esconde a borda do quadrado do PNG
    { input: brasao, top: 165, left: 110 },
    { input: overlay, top: 0, left: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png');

console.log('ícones gerados em public/');
