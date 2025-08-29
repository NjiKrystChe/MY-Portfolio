 const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Fade-in sections on scroll
    const sections = document.querySelectorAll("section");
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if(secTop < triggerBottom){
          sec.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load