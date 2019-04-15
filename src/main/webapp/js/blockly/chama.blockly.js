window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Chama = window.blockly.js.blockly.Chama || {};

/**
 * chama
 */
window.blockly.js.blockly.Chama.Executar = function() {
 var item;
  this.cronapi.screen.changeView("#/home/logged/outrapagina",[ { idUser : this.cronapi.screen.getValueOfField("vars.dynCombobox9021") } ]);
}
