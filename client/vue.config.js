// Prerender
// const PrerenderSPAPlugin  = require('prerender-spa-plugin');
// const path = require('path');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/scss/mixins.scss";`
            }
        }
    },
    // Prerender
    // configureWebpack: {
    //     plugins: process.env.NODE_ENV === 'production' ? [
    //         new PrerenderSPAPlugin({
    //             // Required - The path to the webpack-outputted app to prerender.
    //             staticDir: path.join(__dirname, 'dist'),
    //             // Required - Routes to render.
    //             routes: ['/'],
    //
    //             renderer: new Renderer({
    //                 // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
    //                 headless: false // Display the browser window when rendering. Useful for debugging.
    //             })
    //         }),
    //     ] : []
    // }
}
