 /* --- SEARCH VARIABLES (CHANGE THESE) --- */
        const searchableItems = [
            { name: "How to save money", link: "/tips/saving" },
            { name: "Best Chickens 2026", link: "/cotw/best" },
            { name: "Penny Challenge Strategy", link: "/strategy" },
            { name: "Ryan Trahan Merch", link: "/merch" },
            { name: "Submit a new tip", link: "/submit" }
        ];

        /* --- SEARCH LOGIC --- */
        const searchInput = document.getElementById('main-search');
        const resultsDiv = document.getElementById('search-results');

        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            resultsDiv.innerHTML = '';
            
            if (val.length < 1) {
                resultsDiv.style.display = 'none';
                return;
            }

            const filtered = searchableItems.filter(item => 
                item.name.toLowerCase().includes(val)
            );

            if (filtered.length > 0) {
                resultsDiv.style.display = 'block';
                filtered.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'result-item';
                    div.textContent = item.name;
                    div.onclick = () => window.location.href = item.link;
                    resultsDiv.appendChild(div);
                });
            } else {
                resultsDiv.style.display = 'none';
            }
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target)) resultsDiv.style.display = 'none';
        });

        /* --- ANIMATIONS --- */
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - 50) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        window.onload = reveal;
    
