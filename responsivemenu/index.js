let isShowMenu = false

function toggleMenu() {
   
    isShowMenu = !isShowMenu
    let meneToggle = document.getElementById('menu-toggle')
    let style = isShowMenu ? 'block' : 'none'
    meneToggle.style.display = style
}