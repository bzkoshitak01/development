var selectCallback = function(variant, selector) {
    console.log('this is test');
}

new Shopify.OptionSelectors('product-select', {
    product: {{ product | json }},
    onVariantSelected: selectCallback,
    enableHistoryState: true
});