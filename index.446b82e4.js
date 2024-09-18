Array.from(document.querySelectorAll("li")).filter(function(e){return null!==e.querySelector("ul")}).forEach(function(e){var l=!0;e.querySelector("span").addEventListener("click",function(r){l?(e.querySelector("ul").style.display="none",l=!1):(e.querySelector("ul").style.display="block",l=!0)})});
//# sourceMappingURL=index.446b82e4.js.map
