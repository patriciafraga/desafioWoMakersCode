// index.js

// Importa a biblioteca VLibras
import "https://vlibras.gov.br/app/vlibras-plugin.js";

// Inicializa o widget VLibras
new window.VLibras.Widget({
    rootPah: '/app',
    personalization: 'https://vlibras.gov.br/config/default_logo.json',
    opacity: 0.5,
    position: 'L',
    avatar: 'random',
});
