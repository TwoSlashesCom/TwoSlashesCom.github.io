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



// var x, i, j, l, ll, selElmnt, a, b, c;
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//       e.stopPropagation();
//       closeAllSelect(this);
//       this.nextSibling.classList.toggle("select-hide");
//       this.classList.toggle("select-arrow-active");
      
//       if (this.classList.contains("select-arrow-active")) {
//         this.style.borderRadius = "24px 24px 0 0";
//         this.style.borderBottom = "none";
//       } else {
//         this.style.borderRadius = "";
//         this.style.borderBottom = "2px solid #E6E6E6";
//       }
//     });
// }
// function closeAllSelect(elmnt) {
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
      
//       y[i].style.borderRadius = "";
      
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  // Создаем основной блок для отображения выбранного элемента
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  // Создаем список скрытых элементов
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  // Обрабатываем все элементы select, включая первый
  for (j = 0; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;

    // Добавляем обработчик клика
    c.addEventListener("click", function(e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      // Обновляем выбранный элемент
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;

          // Убираем класс "same-as-selected" у всех элементов
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }

          // Устанавливаем класс для выбранного элемента
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });

    // Добавляем элемент в список
    b.appendChild(c);
  }

  x[i].appendChild(b);

  // Обработчик клика на выбранный элемент
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");

    if (this.classList.contains("select-arrow-active")) {
      this.style.borderRadius = "24px 24px 0 0";
      this.style.borderBottom = "none";
    } else {
      this.style.borderRadius = "";
      this.style.borderBottom = "2px solid #E6E6E6";
    }
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
      y[i].style.borderRadius = "";
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

