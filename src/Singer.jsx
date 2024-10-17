
export default function Singer({singer}){
    return(
        <div className="default">
            <h5>ID: {singer.id}</h5>
            <h4>Singer Name: {singer.name}</h4>
            <p>Age: {singer.Age}</p>
        </div>
    )
}