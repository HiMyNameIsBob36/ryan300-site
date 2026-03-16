//OOP - Inheritence
class MyHeader extends HTMLElement {
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


class MyFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `<footer class="footer"><div class="footer-grid">

<div class="footer-brand">
<h2>ryan300.netlify.app</h2><p>Not associated with Ryan Trahan or Ryan300 in <strong>any</strong> way, purely a fan project</p>
</div>

<div class="contacts">
<a href="https://ryan300.netlify.app/alert" class="alert"><img src="../assets/alert.png"></a>
<a href="mailto:content.himynameisbob36@gmail.com"><img src="../assets/mail.png"></a>
<a href="https://discord.com/"><img src="../assets/discord.png"></a>
<a href="https://youtube.com/@HeyItsBob36"><img src="../assets/youtube.png"></a>
<a href="mailto:content.himynameisbob36@gmail.com"><img src="../assets/github.png"></a>

<div class="footer-bottom">
 © 2026 @HeyItsBob36. All rights reserved.
</div>

</footer>`
  }
}

customElements.define('my-header', MyHeader)
customElements.define('my-legal', MyFooter)

console.log("Loading custom header & footer.")
