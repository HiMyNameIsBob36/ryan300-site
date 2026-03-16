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
<h2>Ryan<span>3000</span></h2><p>Discover stats, data & much more regarding Ryan300's journey so far..</p>
</div>

<div class="footer-column">
<h4>MARKETPLACE</h4>
<a href="#">Browse</a><a href="#">Groups</a><a href="#">Talent</a><a href="#">Upload</a>
</div>

<div class="footer-column">
<h4>ACCOUNT</h4>
<a href="#">Profile</a><a href="#">Creator Dashboard</a><a href="#">Support</a><a href="#">Guidelines</a>
</div>

<div class="footer-column">
<h4>COMMUNITY</h4>
<a href="#">Blog</a><a href="#">Affiliates</a>
</div>

<div class="footer-column">
<h4>LEGAL</h4>
<a href="#">Terms</a><a href="#">Privacy</a>
</div></div>

<div class="footer-bottom">
Not associated with Ryan Trahan or Ryan300 in <strong>any</strong> way, purely a fan project | © 2026 @HeyItsBob36. All rights reserved.
</div>

</footer>`
  }
}

customElements.define('my-header', MyHeader)
customElements.define('my-legal', MyFooter)

console.log("Loading custom header & footer.")
