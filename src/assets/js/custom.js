$(document).ready(function(){
    // Hide submenus
    $('#body-row .collapse').collapse('hide'); 
    
    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left'); 
    
    // Collapse click
    $('[data-toggle=sidebar-colapse]').click(function() {
        SidebarCollapse();
    });
    
    function SidebarCollapse () {
        $('.menu-collapsed').toggleClass('d-none');
        $('.sidebar-submenu').toggleClass('d-none');
        $('.submenu-icon').toggleClass('d-none');
        $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
        
        // Collapse/Expand icon
        $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
    }
   

    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d'
    });
});
var bibleSlideIndex = 1;
bibleShowSlides(bibleSlideIndex);

function biblePlusSlides(n) {
    bibleShowSlides(bibleSlideIndex += n);
}
function bibleCurrentSlide(n) {
    bibleShowSlides(bibleSlideIndex = n);
}
function bibleShowSlides(n) {
    var i;
    var bibleSlides = $("#bible-body .mySlides");
    if (n > bibleSlides.length) {bibleSlideIndex = 1}
    if (n < 1) {bibleSlideIndex = bibleSlides.length}
    for (i = 0; i < bibleSlides.length; i++) {
        bibleSlides[i].style.display = "none";
    }
    bibleSlides[bibleSlideIndex-1].style.display = "block";
}