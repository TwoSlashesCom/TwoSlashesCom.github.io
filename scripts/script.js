document.getElementById('toggle-filters-btn').addEventListener('click', function () {
    const filtersContainer = document.getElementById('filters-container');
    const cont = document.getElementById('container');
    const btn = this;    

    filtersContainer.classList.toggle('hidden');
    cont.classList.toggle('hidden');

    if (filtersContainer.classList.contains('hidden')) {
        btn.innerHTML = `<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.76057 13.2843H1.19733" stroke="#26693D" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.688 3.18788H17.2512" stroke="#26693D" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.08987 3.13151C6.08987 1.78187 4.98762 0.6875 3.62826 0.6875C2.26891 0.6875 1.16666 1.78187 1.16666 3.13151C1.16666 4.48116 2.26891 5.57553 3.62826 5.57553C4.98762 5.57553 6.08987 4.48116 6.08987 3.13151Z" stroke="#26693D" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8333 13.2435C17.8333 11.8938 16.7319 10.7995 15.3726 10.7995C14.0123 10.7995 12.9101 11.8938 12.9101 13.2435C12.9101 14.5931 14.0123 15.6875 15.3726 15.6875C16.7319 15.6875 17.8333 14.5931 17.8333 13.2435Z" stroke="#26693D" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    } else {
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L14 13.9529" stroke="#26693D" stroke-linecap="round"/>
            <path d="M1 14L14 1.04709" stroke="#26693D" stroke-linecap="round"/>
        </svg>
    `;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');
    const header = document.querySelector('#navShowInfo');
    const search = document.getElementById('search-container')



    blocks.forEach(block => {
        block.addEventListener('click', () => {
            const name = block.querySelector('.title').textContent;
            const description = block.querySelector('.description').textContent;
            const icon = block.querySelector('.icon-container').innerHTML;
            const url = block.getAttribute('data-url');

            search.classList.toggle('hidden');


            header.innerHTML = `
                <div class="page-description">
                    <div class="text">
                        <h1>${name}</h1>
                        <p>${description}</p>
                    </div>
                    <div class="icon">${icon}</div>
                </div>`;
            header.style.display = 'flex';

            setTimeout(() => {
                header.style.display = 'none';
                window.location.href = url;
            }, 500);
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const filterNav = document.getElementById('filter-nav');
    let lastScrollTop = 0; 

    const handleScroll = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            filterNav.classList.add('hidden');
        } else {
            filterNav.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    };

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            filterNav.classList.add('hidden');
        } else {
            filterNav.classList.remove('hidden');
        }
    });

    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY; 
    });

    window.addEventListener('touchmove', (e) => {
        const touchEndY = e.touches[0].clientY;

        if (touchEndY < touchStartY) {
            filterNav.classList.add('hidden');
        } else {
            filterNav.classList.remove('hidden');
        }

        touchStartY = touchEndY; 
    });
});