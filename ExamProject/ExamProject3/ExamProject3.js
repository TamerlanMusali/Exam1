let users = [
    {
        nameP: '',
        password: '',
        phone: $('#phone'),
        computers: [
            {
                id: '',
                name: '',
                mark: '',
                permanentMemory: '',
                permamentMemoryType: '',
                ram: '',
                cpu: '',
                gpu: '',
                deepMemory: '',
                description: '',
                price: '',
                new: '',
                videoCard: '',
                img: '',
            }
        ],
    },
]


if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}


$('.place').on('input', function () {
    if (
        $('#name2').val().length >= 2 &&
        document.querySelector('#phone').checkValidity() &&
        $('#nameP').val().length >= 2 &&
        $('#password').val().length >= 2
    ) {
        $('#btn').attr('disabled', false)
    } else {
        $('#btn').attr('disabled', true)
    }
})


$('.alert').css('display', 'none')



$('#btn').click(function (event) {
    event.preventDefault()
    console.log(localStorage.getItem('users'))

    let localUsers = JSON.parse(localStorage.getItem('users'))

    let newUser = {
        nameP: $('#nameP').val(),
        password: $('#password').val(),
        phone: $('#phone'),
        computers: [],
    };


    let alreadyExcist = localUsers.some((user) => user.nameP === $('#nameP').val());


    if (alreadyExcist) {
        alert('This is user already registered');
    } else {
        users.push(newUser),
            localStorage.setItem('users', JSON.stringify(users)),
            $('.place').val(),
            $('.alert').show(),
            setTimeout(function () { $('.alert').hide(); }, 1000)
    }
})