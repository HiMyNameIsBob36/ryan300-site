//OOP - Inheritence
class SiteHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
<div class="navbar">
<div class="logo">ERLC<span>X</span></div>

<form method="get">
<div class="search"><input placeholder="Search creations, users, groups..."></div>
</form>

<div class="nav-right">
<button class="create-btn">+ Create New</button>
<div class="profile">HeyItBob36</div>
</div>
</div>`
  }
}


class SiteFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
       <footer class="footer">
        <div class="footer-top">
            <div class="footer-info">
                <h2>@ryan3000</h2>
                <p>Not associlated or affilated with Ryan Trahan or ryan300 in <strong>any</strong> way, purley a fan made project.</p>
            </div>
            <div class="footer-socials">
                <a href="https://ryan3000.netlify.app/alert"><img class="alert" src="https://ryan3000.netlify.app/media/alert.png"></a>
                <a href="mailto:content.himynameisbob36@gmail.com"><img class="icon" src="https://ryan3000.netlify.app/media/mail.png"></a>
                <a href="https://discord.com/channels/@me"><img class="icon" src="https://ryan3000.netlify.app/media/discord.png"></a>
                <a href="https://youtube.com/@heyitsbob36"><img class="icon" src="https://ryan3000.netlify.app/media/youtube.png"></a>
                <a href="https://github.com/HiMyNameIsBob36"><img src="https://ryan3000.netlify.app/media/github.png"></a>
            </div>
        </div>
        
        <div class="footer-divider"></div>

        <div class="footer-bottom">
            © 2026 | heyitsbob36 | All rights reserved.
        </div>
    </footer>
    ` }
}

customElements.define('site-header', SiteHeader)
customElements.define('site-footer', SiteFooter)

console.log("Loading custom header & footer.")
