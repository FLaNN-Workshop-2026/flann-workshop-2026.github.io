
function loadComponents() {
    // This workaround loads the header and the footer, 
    // and insert it into the proper divs (based on their IDs)
    // to avoid duplication across multiple pages.
    
    header = `
    <header>
    <nav>
        <a href="index.html">
            <div class="logo">
                <!--<img src="https://flannseminars.github.io/img/flann.webp" alt="Conference Logo" height="60px">-->
                <img src="flann-2026-logo.png" alt="Conference Logo" height="60px">
            </div>
        </a>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="dates.html">Important Dates</a></li>
            <li><a href="cfp.html">Call for posters</a></li>
            <li><a href="organization.html">Organization</a></li>
            <li><a href="sponsor.html">Sponsor</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="registration.html" class="link-btn">Registration</a></li>
        </ul>
    </nav>
    <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
    </header>
    `

    // How to add a menu item with dropdown
    //<li><a href="#">Venue/Local</a>
    //        <ul class="dropdown">
    //            <li><a href="gallery.html">Gallery</a></li>
    //            <li><a href="#">Item 2</a></li>
    //            <li><a href="#">Item 3</a></li>
    //        </ul>
    //        </li>

    footer = `
    <footer>
        <p>© Copyright 2025. Conferece Website Template - Designed by <a href="https://github.com/nahimsouza/conference-website/">nahimsouza</a>. MIT License.</p>
    </footer>
    `

    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;

    // responsive menu
    document.querySelector('#menu').addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('showmenu');
    });

}

window.onload = loadComponents;
