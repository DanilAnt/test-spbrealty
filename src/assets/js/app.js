"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const search =document.getElementById("search");
    const cards = document.querySelectorAll('[data-card]')
    const filters = document.querySelectorAll('[data-filter]');
    const filter = document.getElementById("filter");
    const filterMask = document.getElementById("filterMask");
    const checkboxCheckAll = document.getElementById("checkAll");
    filter.addEventListener("click", (e) => {
        if (e.target !== filterMask) {
            filter.classList.add('show');
        }
    });
    filterMask.addEventListener("click", (e) => {
        if (e.target === filterMask) {
            filter.classList.remove('show');
        }
    })

    cards.forEach(card => {
        let id = card.getAttribute('data-card')

        let checkbox = document.getElementById(id);
        card.addEventListener("click", (e) => {
            if (checkbox.checked === true) {
                checkbox.checked = false;
                checkboxCheckAll.checked = false;
            } else {
                checkbox.checked = true;
                let isAllChecked = true;
                
                cards.forEach(c => {
                    let id = c.getAttribute('data-card')
                    let checkbox = document.getElementById(id);
                    
                    // console.log(1,checkbox.checked, c.getAttribute('data-hidden') , c.getAttribute('data-card'), c);
                    
                    if (checkbox.checked !== true && c.getAttribute('data-hidden') === 'false') { isAllChecked = false; }
                })
                if (isAllChecked === true) {
                    checkboxCheckAll.checked = true;
                }
            }
            

        })
    })

    checkboxCheckAll.addEventListener('click', () => {
        if (checkboxCheckAll.checked === true) {
            cards.forEach(card => {
                let id = card.getAttribute('data-card')

                let checkbox = document.getElementById(id);
                checkbox.checked = true;
            })
        } else {
            cards.forEach(card => {
                let id = card.getAttribute('data-card')

                let checkbox = document.getElementById(id);
                checkbox.checked = false;
            })
        }
    })

    filters.forEach((filter) => {
        filter.addEventListener('change', () => {
           
           
           
            if (filter.checked === true ) {
                cards.forEach(card => {
                    let isIncludesSearch = false;
                    for(let node of card.getElementsByTagName("*")){
                        if(node.innerText && node.innerText.toLowerCase().includes(search.value.toLowerCase())){
                            isIncludesSearch = true;
                        }
                    
                    }
                    if (card.getAttribute('data-status') === filter.getAttribute('data-filter')&& isIncludesSearch) {
                        card.setAttribute('data-hidden', 'false');
                        card.classList.remove('hidden');

                    }
                })
            } else {
                cards.forEach(card => {

                    if (card.getAttribute('data-status') === filter.getAttribute('data-filter')) {
                        card.setAttribute('data-hidden', 'true');

                        card.classList.add('hidden');
                    }
                })
            }
            let isAllCardsChecked = true;
            cards.forEach(card => {
                if (card.getAttribute('data-hidden') === 'false') {
                    let id = card.getAttribute('data-card')
                    let checkbox = document.getElementById(id);
                    if (!checkbox.checked) {
                        isAllCardsChecked = false;
                    }
                }
            });
            if (isAllCardsChecked) {
                checkboxCheckAll.checked = true;
            } else {
                checkboxCheckAll.checked = false;
            }

        })
    })

    search.oninput=()=>{
        // console.log(search.value);
        
        cards.forEach(card => {
            // console.log(card.getElementsByTagName("*"));
            let isIncludesSearch = false;
            
            for(let node of card.getElementsByTagName("*")){
                if(node.innerText && node.innerText.toLowerCase().includes(search.value.toLowerCase())){
                    isIncludesSearch = true;
                }
            
            }
            let isIncludesFilter = false;
            filters.forEach((filter) => {
                if (card.getAttribute('data-status') === filter.getAttribute('data-filter')&&filter.checked=== true){
                    isIncludesFilter=true;
                }
            })
            if(isIncludesSearch&&isIncludesFilter){
                card.setAttribute('data-hidden', 'false');

                card.classList.remove('hidden');
            }else{
                card.setAttribute('data-hidden', 'true');

                        card.classList.add('hidden');
            }

        })
        let isAllCardsChecked = true;
            cards.forEach(card => {
                if (card.getAttribute('data-hidden') === 'false') {
                    let id = card.getAttribute('data-card')
                    let checkbox = document.getElementById(id);
                    if (!checkbox.checked) {
                        isAllCardsChecked = false;
                    }
                }
            });
            if (isAllCardsChecked) {
                checkboxCheckAll.checked = true;
            } else {
                checkboxCheckAll.checked = false;
            }
    }
})