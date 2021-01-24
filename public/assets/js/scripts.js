function addBook() {
    var newBookName = document.querySelector('#new').value
    var newBook = {
        book_name: newBookName,
        book_read: 0
    }
    fetch('api/burgers_books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    }).then(response => {
        location.reload()
    })
}

function readBook(id) {
    fetch('api/burgers_books/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            book_read: 1
        })
    }).then(response => {
        location.reload()
    })
}

function unreadBook(id) {
    fetch('api/burgers_books/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            book_read: 0
        })
    }).then(response => {
        location.reload()
    })
}

function deleteBook(id) {
    fetch('api/burgers_books/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        location.reload()
    })
}

document.querySelector('#add').addEventListener('click', addBook)

