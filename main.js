document.ontransitionend = ()=>{
    document.getElementsByTagName('ytd-app')[0].removeAttribute('guide-persistent-and-visible');
    document.getElementsByTagName('ytd-app')[0].setAttribute('mini-guide-visible_','');
    //document.getElementById('contentContainer')[0].removeAttribute('opened');
    let sidebar = document.getElementsByTagName('app-drawer');
    if (sidebar.length > 0) {
        sidebar[0].removeAttribute('opened');
    }
}
