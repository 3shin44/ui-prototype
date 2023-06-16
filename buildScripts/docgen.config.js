const path = require('path')

module.exports = {
    componentsRoot: 'src/components', // the folder where CLI will start searching for components.
    // 排除模板檔案 BlankComponent.vue
    components: '**/(?!BlankComponent)[A-Z]*.vue', // the glob to define what files should be documented as components (relative to componentRoot)
    outDir: 'documents/componentDoc', // folder to save components docs in (relative to the current working directry)
}
