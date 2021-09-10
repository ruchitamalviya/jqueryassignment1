jQuery(document).ready(function() {
    let colors = ['green', 'blue', 'red'];
    let div_obj = {
      0:0,
      1:0,
      2:0
    };

    jQuery('.item').click(function() {
        let clickIndex = jQuery(this).index();
        let divClickCount = div_obj[clickIndex];
        let colorIn = divClickCount % 3;
        jQuery(this).css("backgroundColor", colors[colorIn]);
        divClickCount++;
        div_obj[clickIndex] = divClickCount;
    });
});