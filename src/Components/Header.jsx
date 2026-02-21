
function Header() {
  return (

   <header>
        <nav>
            <div class="initnav">
                <div class="logo">
                    <a href="index.html">
                        <span class="effect">D</span><span class="effect">r</span><span class="effect">e</span><span
                            class="effect">y</span>
                    </a>
                </div>
            </div>
            <div class="NavEnd">
                <ul>
                    <li> <a href="#pjts">projetos</a></li>
                    <li> <a href="#artgs">artigos</a></li>
                    <li><a href="#developer"> contacte-me</a></li>
                </ul>
                <div class="menu-icon" onclick="toggleSidebar()">☰</div>

                <div class="sidebar" id="sidebar">
                    <div class="close-btn" onclick="toggleSidebar()">✕</div>
                    <a href="pages/sobre.html">
                        <i class="bi bi-persoSn-badge-fill"></i>
                        <span>Sobre mim</span>
                    </a>
                    <a href="#pjts">
                        <i class="bi bi-folder-fill"></i>
                        <span>projetos</span>
                    </a>
                    <a href="pages/artigos.html">
                        <i class="bi bi-file-earmark-text-fill"></i>

                        <span>Artigos</span>
                    </a>
                    <a href="#developer">
                        <i class="bi bi-envelope-arrow-up-fill"></i>
                        <span>Contato</span>
                    </a>
                </div>
            </div>
        </nav>

    </header>
  );
}


export default Header;