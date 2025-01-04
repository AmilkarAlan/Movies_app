

export default function Card({ item }) {
    return (
        <div key={item.id} className="p-2">
            <div className="bg-gray-800 p-4 rounded">
                <h3>{item.title || item.name}</h3>
                <p>{item.overview}</p>
            </div>
        </div>
    )
}
