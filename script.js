$(document).ready(function() {
    function toggleSidebar() {
        closeSidebarListItem();
        $('.sidebar').toggleClass('active');
    }
    $('.header-bars-icon').on('click', toggleSidebar);

    function closeSidebarListItem() {
        $('.sidebar-item-expandable.active').next().slideUp('fast');
        $('.sidebar-item-expandable.active').removeClass('active');
    }

    function closeCurrentSidebarListItem(clickedElm) {
        if (!$(clickedElm).hasClass('active')) {
            closeSidebarListItem();
        }
    }
    function expandSidebar() {
        const currentSidebarWidth = $('.sidebar').outerWidth();
        const expandSidebarWidth = 238;
        if (currentSidebarWidth < expandSidebarWidth) {
            console.log(typeof currentSidebarWidth);
            $('.sidebar').toggleClass('active');//open sidebar when it's mobile, tablet, computer
            return true;
        }
        return false;
    }
    function openSidebarListItem(clickedElm) {
        const isExpandSidebar = expandSidebar();
        let sidebarOpenTime = 0;

        closeCurrentSidebarListItem(clickedElm);
        if (isExpandSidebar) {
            sidebarOpenTime = 250;
        }
        setTimeout(function() {
            $(clickedElm).addClass('active');
            $(clickedElm).next().slideDown('fast');
        }, sidebarOpenTime);
    }

    function handleSidebarItem() {
        $(this).hasClass('active') ? closeSidebarListItem() : openSidebarListItem(this);
    }
    $('.sidebar-item-expandable').on('click', handleSidebarItem);
    
})