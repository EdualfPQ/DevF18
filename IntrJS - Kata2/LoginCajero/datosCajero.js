const users = [
    {
        user: 'edualf',
        name: 'Edualf Pacheco Quintero',
        balance: 120,
        nip: '1824',
        id: 1
    },
    {
        user: 'maria',
        name: 'Maria de los Angeles Quintero Campos',
        balance: 125,
        nip: '2432',
        id: 2
    },
    {   
        user: 'eduardo',
        name: 'Eduardo Alfonso Pacheco Quintero',
        balance: 201,
        nip: '3240',
        id: 3
    },
];
localStorage.setItem('users',JSON.stringify(users))