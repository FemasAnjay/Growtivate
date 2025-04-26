


const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box

      








        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const books = document.querySelectorAll('.book'); // Select all book elements
  const aboutSection = document.getElementById('about'); // If you have an About section

  // Search function
  function searchContent() {
      const query = searchInput.value.toLowerCase(); // Get the query in lowercase
      let found = false;

      // Loop through all books and check if the title or author matches the query
      books.forEach(function (book) {
          const title = book.querySelector('.book-title').textContent.toLowerCase();
          const author = book.querySelector('.book-author').textContent.toLowerCase();

          if (title.includes(query) || author.includes(query)) {
              book.style.display = ''; // Show matching books
              found = true;
          } else {
              book.style.display = 'none'; // Hide non-matching books
          }
      });

      // If query matches "about", display the about section
      if (query.includes('about')) {
          aboutSection.style.display = '';
          found = true;
      } else {
          aboutSection.style.display = 'none';
      }

      // If no results found
      if (!found && query !== '') {
          alert('No results found');
      }
  }

  // Attach event listener to search input
  searchInput.addEventListener('input', searchContent);
});

const searchInput = document.querySelector('.search-field input');
const books = document.querySelectorAll('.book');

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const query = searchInput.value.toLowerCase();

        books.forEach(function(book) {
            const title = book.querySelector('.book-title').textContent.toLowerCase();
            const author = book.querySelector('.book-author').textContent.toLowerCase();

            if (title.includes(query) || author.includes(query)) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    }
});


