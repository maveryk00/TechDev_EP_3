window.onload = (event) => {
    const formActionsTemplate =
    `<button class="btn btn-submit btn-flat waves-effect waves-light btn-small">
         <i class="material-icons">send</i>
     </button>
     <button class="btn btn-cancel btn-flat waves-effect waves-light btn-small">
         <i class="material-icons">cancel</i>
     </button>`

     const rowActionsTemplate =
     `<button class="btn btn-edit btn-flat waves-effect waves-light btn-small">
          <i class="material-icons">edit</i>
      </button>
      <button class="btn btn-delete btn-flat waves-effect waves-light btn-small">
          <i class="material-icons">delete</i>
      </button>`

    let rows = document.querySelectorAll('tbody tr:not(tbody tr:last-child)')
    rows.forEach((row) => {
        let btnEdit = row.querySelector('.btn-edit')
        let btnDelete = row.querySelector('.btn-delete')

        btnEdit.addEventListener('click', (event) => {
            convertToForm(row)
        })

        btnDelete.addEventListener('click', (event) => {
            deleteForm(row)
        })
    })

    let btnCreate = document.querySelector('.btn-create')
    btnCreate.addEventListener('click', (event) => {
        createClient()
    })


    console.log(location.search)
    if (location.search.length >= 2) {
        let error = location.search.replace('?','').split('=')

        if (error[0] == 'error' && error[1] == 'duplicate')
            {
             var toastHTML = '<span>Correo o celular duplicado</span>';
              M.toast({html: toastHTML, classes: 'rounded red lighten-2'});
            }
    }


    function convertToForm(row) {
//        let cellsData = row.querySelectorAll('td:not(td:first-child):not(td:last-child)')
        let cellsData = row.querySelectorAll('td:not(td:last-child)')
        let cellsActions = row.querySelector('td:last-child')

        let form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', '/cliente')
//        form.onsubmit = (event) => {
//            event.preventDefault()
//        }

        let inputPut = document.createElement('input')
        inputPut.setAttribute('type', 'hidden')
        inputPut.setAttribute('name', '_method')
        inputPut.setAttribute('value', 'put')
        form.appendChild(inputPut)

        cellsData.forEach((cell, index) => {
            let input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.setAttribute('name', cell.getAttribute('data-name'))
            input.setAttribute('value', cell.innerText)

            if (index == 0) {
                input.setAttribute('disabled', '')
                form.id = `update-client-${cell.innerText}`
                form.setAttribute('action', `/cliente/${cell.innerText}`)
            }

            input.setAttribute('form', form.id)

            cell.innerHTML = ''
            cell.appendChild(input)
        })

        cellsActions.innerHTML = formActionsTemplate
        let btnSubmit = cellsActions.querySelector('.btn-submit')
        let btnCancel = cellsActions.querySelector('.btn-cancel')

        btnSubmit.addEventListener('click', (event) => {
            form.submit()
        })

        btnCancel.addEventListener('click', (event) => {
            cancelForm(row)
            form.remove()
        })

        document.body.appendChild(form)
    }

    function cancelForm(row) {
        let cellsData = row.querySelectorAll('td:not(td:last-child)')
        let cellsActions = row.querySelector('td:last-child')

        cellsData.forEach((cell, index) => {
            let input = cell.querySelector('input')
            let value = input.value

            cell.setAttribute('data-name', input.getAttribute('name'))
            cell.innerHTML = value

            if (index == 0)
                cell.classList.add('center-align')
        })

        cellsActions.innerHTML = rowActionsTemplate
        let btnEdit = cellsActions.querySelector('.btn-edit')
        let btnDelete = cellsActions.querySelector('.btn-delete')

        btnEdit.addEventListener('click', (event) => {
            convertToForm(row)
        })

        btnDelete.addEventListener('click', (event) => {
            deleteForm(row)
        })
    }

    function deleteForm(row) {
        let cellData = row.querySelector('td:first-child')

        let form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', `/cliente/${cellData.innerText}`)

        let inputPut = document.createElement('input')
        inputPut.setAttribute('type', 'hidden')
        inputPut.setAttribute('name', '_method')
        inputPut.setAttribute('value', 'delete')
        form.appendChild(inputPut)

        document.body.appendChild(form)
        form.submit()
    }

    function createClient() {
        let form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', '/cliente')
        form.id = 'create-client'

        document.body.appendChild(form)
        form.submit()
    }
}