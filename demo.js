require.config({
    paths: {
        'broco': 'src'
    }
});

define(['broco/ui/core'], function(ui) {
    broco = new ui('#console');
    broco.prompt.value = "Living ship";
    broco.prompt.display();
});