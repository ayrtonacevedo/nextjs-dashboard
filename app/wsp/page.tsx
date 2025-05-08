export default function Page() {
    const person = [
        {
            name: 'Lautaro',
            telefono: '+5493517535306',
            vencimiento: '07/05/2025'

        }, {
            name: 'Camila',
            telefono: '+5492614567890',
            vencimiento: '15/06/2025',
        },
        {
            name: 'Juan Pablo',
            telefono: '+5493419876543',
            vencimiento: '22/07/2025',
        },
        {
            name: 'Sofía',
            telefono: '+5493512345678',
            vencimiento: '01/08/2025',
        },
        {
            name: 'Matías',
            telefono: '+5492991122334',
            vencimiento: '30/09/2025',
        },
        {
            name: 'Valentina',
            telefono: '+5493879988776',
            vencimiento: '12/10/2025',
        },

    ]
    return (
        <ul className="space-y-2">
            {person.map((p, index) => (
                <li key={index} className="flex items-center border p-4 rounded shadow-sm">
                    <div>
                        <p className="font-semibold">{p.name}</p>
                        <p>Teléfono: {p.telefono}</p>
                        <p>Vencimiento: {p.vencimiento}</p>
                    </div>
                    <a
                        href={`https://wa.me/${p.telefono}?text=${encodeURIComponent(
                            `Hola ${p.name}, tu membresía vence el ${p.vencimiento}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        WhatsApp
                    </a>
                </li>
            ))}
        </ul>
    );

}